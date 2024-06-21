import {Component, Input} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {NumeriekeVraag} from "../../model/numerieke-vraag";

@Component({
  selector: 'app-numerieke-vraag',
  standalone: true,
  imports: [],
  templateUrl: './numerieke-vraag.component.html',
  styleUrl: './numerieke-vraag.component.css'
})
export class NumeriekeVraagComponent {
  @Input() numeriekeVraag?: NumeriekeVraag;

}
