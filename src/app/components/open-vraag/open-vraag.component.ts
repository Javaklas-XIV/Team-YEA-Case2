import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {OpenVraag} from "../../model/open-vraag";
import {OpenAntwoord} from "../../model/open-antwoord";
import {Antwoord} from "../../model/antwoord";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-open-vraag',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './open-vraag.component.html',
  styleUrl: './open-vraag.component.css'
})
export class OpenVraagComponent {
  @Input() openVraag?: OpenVraag;
  // @Output() openAntwoord: OpenAntwoord = {
  //   vraagID: this.openVraag.vraagnummer,
  //   lijst: 1,
  //   antwoord: ""};
  @Output() antwoordGegeven = new EventEmitter<OpenAntwoord>();

  private _beschrijving: string = "";
  protected antwoord: string = "";

  public getBeschrijving(): string {
    return this._beschrijving;
  }

  stuurAntwoord() {
    let openAntwoord: OpenAntwoord = {antwoord: this.antwoord, vraagID: this.openVraag?.vraagnummer ?? -1, type:"O"};
    this.antwoordGegeven.emit(openAntwoord);
  }
}
