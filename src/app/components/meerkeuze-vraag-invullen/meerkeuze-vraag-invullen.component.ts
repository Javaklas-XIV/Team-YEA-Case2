import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";
import {MeerkeuzeAntwoord} from "../../model/meerkeuze-antwoord";
import {Antwoord} from "../../model/antwoord";
import {OpenAntwoord} from "../../model/open-antwoord";

@Component({
  selector: 'app-meerkeuze-vraag-invullen',
  standalone: true,
  imports: [],
  templateUrl: './meerkeuze-vraag-invullen.component.html',
  styleUrl: './meerkeuze-vraag-invullen.component.css'
})
export class MeerkeuzeVraagInvullenComponent {
  @Input() meerkeuzeVraag?: MeerkeuzeVraag;
  @Input() antwoorden?: Map<number,Antwoord>;
  @Output() antwoordGegeven = new EventEmitter<MeerkeuzeAntwoord>();

  protected _antwoord: number = -1;

  ngOnInit() {
    this._antwoord = (this.antwoorden?.get(this.meerkeuzeVraag?.formObjectId ?? 0) as MeerkeuzeAntwoord).antwoord.at(0) ?? -1;
  }

  set antwoord(index: number) {
    this._antwoord = index;
  }

  get vraagnummer() {
    return this.meerkeuzeVraag?.formObjectId ?? -1;
  }

  stuurAntwoord() {
    let meerkeuzeAntwoord: MeerkeuzeAntwoord = {antwoord: [this._antwoord], vraagID: this.meerkeuzeVraag?.formObjectId ?? -1, type: "M"};
    this.antwoordGegeven.emit(meerkeuzeAntwoord);
  }
}
