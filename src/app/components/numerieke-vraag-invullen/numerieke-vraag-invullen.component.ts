import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NumeriekeVraag} from "../../model/numerieke-vraag";
import {NumeriekAntwoord} from "../../model/numeriek-antwoord";
import {FormsModule} from "@angular/forms";
import {Antwoord} from "../../model/antwoord";
import {OpenAntwoord} from "../../model/open-antwoord";

@Component({
  selector: 'app-numerieke-vraag-invullen',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './numerieke-vraag-invullen.component.html',
  styleUrl: './numerieke-vraag-invullen.component.css'
})
export class NumeriekeVraagInvullenComponent {
  @Input() numeriekeVraag?: NumeriekeVraag;
  @Input() antwoorden?: Map<number,Antwoord>;
  @Output() antwoordGegeven = new EventEmitter<NumeriekAntwoord>();

  protected antwoord: number = 0;

  ngOnInit() {
    this.antwoord = (this.antwoorden?.get(this.numeriekeVraag?.formObjectId ?? 0) as NumeriekAntwoord).antwoord ?? 0;
  }

  stuurAntwoord() {
    let numeriekAntwoord: NumeriekAntwoord = {antwoord: this.antwoord, vraagID: this.numeriekeVraag?.formObjectId ?? -1, type: "N"};
    this.antwoordGegeven.emit(numeriekAntwoord);
  }
}
