import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {VragenlijstOnderdeel} from "../../model/vragenlijst-onderdeel";
import {VragenlijstObject} from "../../model/vragenlijst-object";
import {OpenVraag} from "../../model/open-vraag";
import {NumeriekeVraag} from "../../model/numerieke-vraag";
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";
import {OpenVraagInvullenComponent} from "../open-vraag-invullen/open-vraag-invullen.component";
import {MeerkeuzeVraagInvullenComponent} from "../meerkeuze-vraag-invullen/meerkeuze-vraag-invullen.component";
import {NumeriekeVraagInvullenComponent} from "../numerieke-vraag-invullen/numerieke-vraag-invullen.component";
import {Antwoord} from "../../model/antwoord";
import {OpenAntwoord} from "../../model/open-antwoord";
import {NumeriekAntwoord} from "../../model/numeriek-antwoord";
import {MeerkeuzeAntwoord} from "../../model/meerkeuze-antwoord";

@Component({
  selector: 'app-vragenlijst-onderdeel-invullen',
  standalone: true,
  imports: [
    OpenVraagInvullenComponent,
    MeerkeuzeVraagInvullenComponent,
    NumeriekeVraagInvullenComponent
  ],
  templateUrl: './vragenlijst-onderdeel-invullen.component.html',
  styleUrl: './vragenlijst-onderdeel-invullen.component.css'
})
export class VragenlijstOnderdeelInvullenComponent {
  @Input() vragenlijstOnderdeel?: VragenlijstOnderdeel;
  @Input() antwoorden?: Map<number,Antwoord>;
  @Output() antwoordenGekregen = new EventEmitter<Map<number, Antwoord>>();

  private antwoordenMap = new Map<number, Antwoord>();

  getOnderdelen() {
    return this.vragenlijstOnderdeel?.onderdelen;
  }

  isVragenlijstOnderdeel(vo: VragenlijstObject): vo is VragenlijstOnderdeel {
    return vo.type === 'F';
  }

  isMeerkeuzeVraag(fo: VragenlijstObject): fo is MeerkeuzeVraag {
    return fo.type === 'M';
  }

  isNumeriekeVraag(fo: VragenlijstObject): fo is NumeriekeVraag {
    return fo.type === 'N';
  }

  isOpenVraag(fo: VragenlijstObject): fo is OpenVraag {
    return fo.type === 'O';
  }

  addOpenAntwoord(openAntwoord: OpenAntwoord) {
    this.antwoordenMap.set(openAntwoord.vraagID, openAntwoord)
    this.stuurAntwoordenMap();
  }

  addNumeriekAntwoord(numeriekAntwoord: NumeriekAntwoord) {
    this.antwoordenMap.set(numeriekAntwoord.vraagID, numeriekAntwoord)
    this.stuurAntwoordenMap();
  }

  addMeerkeuzeAntwoord(meerkeuzeAntwoord: MeerkeuzeAntwoord) {
    this.antwoordenMap.set(meerkeuzeAntwoord.vraagID, meerkeuzeAntwoord)
    this.stuurAntwoordenMap();
  }
  stuurAntwoordenMap() {
    this.antwoordenGekregen.emit(this.antwoordenMap);
  }
}
