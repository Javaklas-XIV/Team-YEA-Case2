import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";
import {NumeriekAntwoord} from "../../model/numeriek-antwoord";
import {MeerkeuzeAntwoord} from "../../model/meerkeuze-antwoord";

@Component({
  selector: 'app-meerkeuze-vraag',
  standalone: true,
  imports: [],
  templateUrl: './meerkeuze-vraag.component.html',
  styleUrl: './meerkeuze-vraag.component.css'
})
export class MeerkeuzeVraagComponent {
  @Input() meerkeuzeVraag?: MeerkeuzeVraag;
  @Output() antwoordGegeven = new EventEmitter<MeerkeuzeAntwoord>();

  private _antwoord: number = -1;
  // protected _nr = this.meerkeuzeVraag?.vraagnummer ?? -1;

  set antwoord(index: number) {
    this._antwoord = index;
  }

  get vraagnummer() {
    return this.meerkeuzeVraag?.vraagnummer ?? -1;
  }

  stuurAntwoord() {
    let meerkeuzeAntwoord: MeerkeuzeAntwoord = {antwoord: [this._antwoord], vraagID: this.meerkeuzeVraag?.vraagnummer ?? -1};
    this.antwoordGegeven.emit(meerkeuzeAntwoord);
  }
}
