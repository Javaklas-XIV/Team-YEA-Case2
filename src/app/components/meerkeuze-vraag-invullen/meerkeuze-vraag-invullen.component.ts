import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";
import {MeerkeuzeAntwoord} from "../../model/meerkeuze-antwoord";

@Component({
  selector: 'app-meerkeuze-vraag-invullen',
  standalone: true,
  imports: [],
  templateUrl: './meerkeuze-vraag-invullen.component.html',
  styleUrl: './meerkeuze-vraag-invullen.component.css'
})
export class MeerkeuzeVraagInvullenComponent {
  @Input() meerkeuzeVraag?: MeerkeuzeVraag;
  @Output() antwoordGegeven = new EventEmitter<MeerkeuzeAntwoord>();

  private _antwoord: number = -1;

  set antwoord(index: number) {
    this._antwoord = index;
  }

  get vraagnummer() {
    return this.meerkeuzeVraag?.vraagnummer ?? -1;
  }

  stuurAntwoord() {
    let meerkeuzeAntwoord: MeerkeuzeAntwoord = {antwoord: [this._antwoord], vraagID: this.meerkeuzeVraag?.vraagnummer ?? -1, type: "M"};
    this.antwoordGegeven.emit(meerkeuzeAntwoord);
  }
}
