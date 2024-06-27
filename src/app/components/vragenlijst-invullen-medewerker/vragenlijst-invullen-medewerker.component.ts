import { Component } from '@angular/core';
import {MenubarClientComponent} from "../menubar-client/menubar-client.component";
import {
    VragenlijstOnderdeelInvullenComponent
} from "../vragenlijst-onderdeel-invullen/vragenlijst-onderdeel-invullen.component";
import {VragenlijstOnderdeel} from "../../model/vragenlijst-onderdeel";
import {IngevuldeVragenlijst} from "../../model/ingevulde-vragenlijst";
import {Antwoord} from "../../model/antwoord";
import {ActivatedRoute, Router} from "@angular/router";
import {VragenlijstObject} from "../../model/vragenlijst-object";
import {IngevuldeVragenlijstService} from "../../service/ingevulde-vragenlijst.service";
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";

@Component({
  selector: 'app-vragenlijst-invullen-medewerker',
  standalone: true,
  imports: [
    MenubarClientComponent,
    VragenlijstOnderdeelInvullenComponent,
    MenubarMedewerkerComponent
  ],
  templateUrl: './vragenlijst-invullen-medewerker.component.html',
  styleUrl: './vragenlijst-invullen-medewerker.component.css'
})
export class VragenlijstInvullenMedewerkerComponent {
  protected vragenlijst: VragenlijstOnderdeel[] = [];
  protected ingevuldeVragenlijst: IngevuldeVragenlijst = {} as IngevuldeVragenlijst;
  protected deelParam: number = -1;
  protected deel: number = 0;
  protected antwoordenMap = new Map<number, Antwoord>();
  private param = -1;

  protected get deelIndex(): number {
    return this.deelParam - 1;
  };

  constructor(private route: ActivatedRoute,
              // private vServ: VragenlijstService,
              private ivServ: IngevuldeVragenlijstService,
              private router: Router) {
  }

  ngOnInit() {
    this.param = parseInt(this.route.snapshot.paramMap.get('id') ?? "-1");
    this.getVragenlijst();
  }

  getVragenlijst() {
    this.ivServ.getIngevuldeVragenlijst(this.param).subscribe(x => {
      this.ingevuldeVragenlijst = x;
      this.mapAntwoorden();
      console.log(x);
      console.log("original iv",this.ingevuldeVragenlijst);
    });
  }

  isVragenlijstOnderdeel(vo: VragenlijstObject): vo is VragenlijstOnderdeel {
    console.log("testje:", vo);
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
    console.error("te");
    console.log("vdto")
    console.log("vdto:", this.ingevuldeVragenlijst.vragenLijstDto)
    const a = Array.from(this.antwoordenMap.values());
    const iv: IngevuldeVragenlijst = {
      id: this.ingevuldeVragenlijst.id,
      antwoorden: a,
      vragenLijstDto: this.ingevuldeVragenlijst.vragenLijstDto,
      userId: this.ingevuldeVragenlijst.userId} as IngevuldeVragenlijst;
    // this.ivServ.createIngevuldeVragenlijst(iv).subscribe();
    let id = this.ingevuldeVragenlijst.id;
    console.log("update iv:",iv);
    this.ivServ.editIngevuldeVragenlijst(id, iv).subscribe();
  }

  mapAntwoorden() {
    for (var antwoord of this.ingevuldeVragenlijst.antwoorden) {
      this.antwoordenMap.set(antwoord.vraagID, antwoord);
    }
  }

  protected readonly IngevuldeVragenlijstService = IngevuldeVragenlijstService;

}
