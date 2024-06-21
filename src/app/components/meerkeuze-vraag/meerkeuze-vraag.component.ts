import {Component, Input} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";

@Component({
  selector: 'app-meerkeuze-vraag',
  standalone: true,
  imports: [],
  templateUrl: './meerkeuze-vraag.component.html',
  styleUrl: './meerkeuze-vraag.component.css'
})
export class MeerkeuzeVraagComponent {
  @Input() meerkeuzeVraag?: MeerkeuzeVraag;

}
