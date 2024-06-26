import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VragenlijstOnderdeel} from "../../model/vragenlijst-onderdeel";
import {OpenVraag} from "../../model/open-vraag";
import {OpenAntwoord} from "../../model/open-antwoord";
import {Antwoord} from "../../model/antwoord";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-open-vraag-invullen',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './open-vraag-invullen.component.html',
  styleUrl: './open-vraag-invullen.component.css'
})
export class OpenVraagInvullenComponent {
  @Input() openVraag?: OpenVraag;
  @Input() antwoorden?: Map<number,Antwoord>;
  @Output() antwoordGegeven = new EventEmitter<OpenAntwoord>();

  protected antwoord = "";

  ngOnInit() {
    // this.antwoord = (this.antwoorden?.find(antwoord => antwoord.vraagID === this.openVraag?.formObjectId) as OpenAntwoord).antwoord ?? "";
    // this.antwoord = (this.antwoorden?.at(0) as OpenAntwoord).antwoord;
    this.antwoord = (this.antwoorden?.get(this.openVraag?.formObjectId ?? 0) as OpenAntwoord).antwoord ?? "";
  }


  stuurAntwoord() {
    let openAntwoord: OpenAntwoord = {antwoord: this.antwoord, vraagID: this.openVraag?.formObjectId ?? -1, type:"O"};
    this.antwoordGegeven.emit(openAntwoord);
  }
}
