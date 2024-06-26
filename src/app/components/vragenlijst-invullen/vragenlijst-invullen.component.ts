import {Component} from '@angular/core';
import {VragenlijstService} from "../../service/vragenlijst.service";
import {VragenlijstObject} from "../../model/vragenlijst-object";
import {ActivatedRoute, Router} from "@angular/router";
import {VragenlijstOnderdeel} from "../../model/vragenlijst-onderdeel";
import {VragenlijstOnderdeelInvullenComponent} from "../vragenlijst-onderdeel-invullen/vragenlijst-onderdeel-invullen.component";
import {Antwoord} from "../../model/antwoord";
import {IngevuldeVragenlijst} from "../../model/ingevulde-vragenlijst";
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";
import {IngevuldeVragenlijstService} from "../../service/ingevulde-vragenlijst.service";

@Component({
  selector: 'app-vragenlijst-invullen',
  standalone: true,
  imports: [
    VragenlijstOnderdeelInvullenComponent,
    MenubarMedewerkerComponent
  ],
  templateUrl: './vragenlijst-invullen.component.html',
  styleUrl: './vragenlijst-invullen.component.css'
})
export class VragenlijstInvullenComponent {
  protected vragenlijst: VragenlijstOnderdeel[] = [];
  protected deelParam: number = -1;
  protected deel: number = 0;
  private antwoordenMap = new Map<number, Antwoord>();

  protected get deelIndex(): number {
    return this.deelParam - 1;
  };

  constructor(private route: ActivatedRoute, private vServ: VragenlijstService, private ivServ: IngevuldeVragenlijstService, private router: Router) {
    this.getVragenlijst();
  }

  getVragenlijst() {
    this.vServ.getVragenlijst().subscribe(x => {
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
    this.ivServ.createIngevuldeVragenlijst(iv).subscribe();
  }
}
