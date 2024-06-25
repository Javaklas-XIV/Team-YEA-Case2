import {Component} from '@angular/core';
import {VragenlijstService} from "../../service/vragenlijst.service";
import {VragenlijstObject} from "../../model/vragenlijst-object";
import {ActivatedRoute, Router} from "@angular/router";
import {VragenlijstOnderdeel} from "../../model/vragenlijst-onderdeel";
import {VragenlijstOnderdeelComponent} from "../vragenlijst-onderdeel/vragenlijst-onderdeel.component";
import {Antwoord} from "../../model/antwoord";
import {IngevuldeVragenlijst} from "../../model/ingevulde-vragenlijst";

@Component({
  selector: 'app-vragenlijst',
  standalone: true,
  imports: [
    VragenlijstOnderdeelComponent
  ],
  templateUrl: './vragenlijst.component.html',
  styleUrl: './vragenlijst.component.css'
})
export class VragenlijstComponent {
  protected vragenlijst: VragenlijstOnderdeel[] = [];
  protected deelParam: number = -1;
  protected deel: number = 0;
  private antwoordenMap = new Map<number, Antwoord>();

  protected get deelIndex(): number {
    return this.deelParam - 1;
  };

  constructor(private route: ActivatedRoute, private service: VragenlijstService, private router: Router) {
    this.getVragenlijst();
  }

  getVragenlijst() {
    this.service.getVragenlijst().subscribe(x => {
      this.vragenlijst = x;
    });
  }

  isVragenlijstOnderdeel(vo: VragenlijstObject): vo is VragenlijstOnderdeel {
    return vo.type === 'F';
  }

  volgende() {
    this.deel++;
  }

  vorige() {
    this.deel--;
  }

  isDeel(x: number) {
    return x === this.deel;
  }

  addAntwoorden(aMap: Map<number, Antwoord>) {
    this.antwoordenMap = new Map([...this.antwoordenMap, ...aMap]);
  }

  saveAntwoorden() {
    const a = Array.from(this.antwoordenMap.values());
    const iv: IngevuldeVragenlijst = {antwoorden: a} as IngevuldeVragenlijst;
    this.service.createIngevuldeVragenlijst(iv).subscribe();
  }
}
