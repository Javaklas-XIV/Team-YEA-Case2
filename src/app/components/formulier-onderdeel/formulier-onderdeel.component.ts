import {Component, Injectable, Input} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {FormulierObject} from "../../model/formulier-object";
import {OpenVraag} from "../../model/open-vraag";
import {NumeriekeVraag} from "../../model/numerieke-vraag";
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";
import {OpenVraagComponent} from "../open-vraag/open-vraag.component";
import {MeerkeuzeVraagComponent} from "../meerkeuze-vraag/meerkeuze-vraag.component";
import {NumeriekeVraagComponent} from "../numerieke-vraag/numerieke-vraag.component";

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
  private vragen?: FormulierOnderdeel | OpenVraag | NumeriekeVraag | MeerkeuzeVraag;

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
}
