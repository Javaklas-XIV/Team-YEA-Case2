import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VragenlijstOnderdeel} from "../../model/vragenlijst-onderdeel";
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
  @Output() antwoordGegeven = new EventEmitter<OpenAntwoord>();

  protected antwoord: string = "";

  stuurAntwoord() {
    let openAntwoord: OpenAntwoord = {antwoord: this.antwoord, vraagID: this.openVraag?.vraagnummer ?? -1, type:"O"};
    this.antwoordGegeven.emit(openAntwoord);
  }
}
