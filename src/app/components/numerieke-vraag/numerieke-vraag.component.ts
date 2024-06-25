import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {NumeriekeVraag} from "../../model/numerieke-vraag";
import {OpenAntwoord} from "../../model/open-antwoord";
import {NumeriekAntwoord} from "../../model/numeriek-antwoord";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-numerieke-vraag',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './numerieke-vraag.component.html',
  styleUrl: './numerieke-vraag.component.css'
})
export class NumeriekeVraagComponent {
  @Input() numeriekeVraag?: NumeriekeVraag;
  @Output() antwoordGegeven = new EventEmitter<NumeriekAntwoord>();

  protected antwoord: number = 0;

  stuurAntwoord() {
    let numeriekAntwoord: NumeriekAntwoord = {antwoord: this.antwoord, vraagID: this.numeriekeVraag?.vraagnummer ?? -1, type: "N"};
    this.antwoordGegeven.emit(numeriekAntwoord);
  }
}
