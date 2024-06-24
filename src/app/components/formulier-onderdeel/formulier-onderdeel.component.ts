import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {FormulierObject} from "../../model/formulier-object";
import {OpenVraag} from "../../model/open-vraag";
import {NumeriekeVraag} from "../../model/numerieke-vraag";
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";
import {OpenVraagComponent} from "../open-vraag/open-vraag.component";
import {MeerkeuzeVraagComponent} from "../meerkeuze-vraag/meerkeuze-vraag.component";
import {NumeriekeVraagComponent} from "../numerieke-vraag/numerieke-vraag.component";
import {Antwoord} from "../../model/antwoord";
import {OpenAntwoord} from "../../model/open-antwoord";
import {NumeriekAntwoord} from "../../model/numeriek-antwoord";
import {MeerkeuzeAntwoord} from "../../model/meerkeuze-antwoord";

@Component({
  selector: 'app-formulier-onderdeel',
  standalone: true,
  imports: [
    OpenVraagComponent,
    MeerkeuzeVraagComponent,
    NumeriekeVraagComponent
  ],
  templateUrl: './formulier-onderdeel.component.html',
  styleUrl: './formulier-onderdeel.component.css'
})
export class FormulierOnderdeelComponent {
  @Input() formulierOnderdeel?: FormulierOnderdeel;
  @Output() antwoordenGekregen = new EventEmitter<Map<number, Antwoord>>();

  // private vragen?: FormulierOnderdeel | OpenVraag | NumeriekeVraag | MeerkeuzeVraag;
  // private antwoorden: Antwoord[] = [];
  private antwoordenMap = new Map<number, Antwoord>();

  getOnderdelen() {
    return this.formulierOnderdeel?.onderdelen;
  }

  test() {
    let i = 0;
    let onderdelen = this.getOnderdelen();
    let length = onderdelen?.length ?? 0;
    for(i=0; i<length; i++) {
      if(onderdelen?.[i].type === 'O') {
      }
    }
  }

  isFormulierOnderdeel(fo: FormulierObject): fo is FormulierOnderdeel {
    return fo.type === 'F';
  }

  isMeerkeuzeVraag(fo: FormulierObject): fo is MeerkeuzeVraag {
    return fo.type === 'M';
  }

  isNumeriekeVraag(fo: FormulierObject): fo is NumeriekeVraag {
    return fo.type === 'N';
  }

  isOpenVraag(fo: FormulierObject): fo is OpenVraag {
    return fo.type === 'O';
  }

  addOpenAntwoord(openAntwoord: OpenAntwoord) {
    // this.antwoorden.push(openAntwoord);
    this.antwoordenMap.set(openAntwoord.vraagID, openAntwoord)
    console.log(this.antwoordenMap);
    this.stuurAntwoordenMap();
  }

  addNumeriekAntwoord(numeriekAntwoord: NumeriekAntwoord) {
    this.antwoordenMap.set(numeriekAntwoord.vraagID, numeriekAntwoord)
    console.log(this.antwoordenMap);
    this.stuurAntwoordenMap();
  }

  addMeerkeuzeAntwoord(meerkeuzeAntwoord: MeerkeuzeAntwoord) {
    this.antwoordenMap.set(meerkeuzeAntwoord.vraagID, meerkeuzeAntwoord)
    console.log(this.antwoordenMap);
    this.stuurAntwoordenMap();
  }
  stuurAntwoordenMap() {
    this.antwoordenGekregen.emit(this.antwoordenMap);
  }
}
