import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NumeriekeVraag} from "../../model/numerieke-vraag";
import {NumeriekAntwoord} from "../../model/numeriek-antwoord";
import {FormsModule} from "@angular/forms";

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
  @Output() antwoordGegeven = new EventEmitter<NumeriekAntwoord>();

  protected antwoord: number = 0;

  stuurAntwoord() {
    let numeriekAntwoord: NumeriekAntwoord = {antwoord: this.antwoord, vraagID: this.numeriekeVraag?.vraagnummer ?? -1, type: "N"};
    this.antwoordGegeven.emit(numeriekAntwoord);
  }
}
