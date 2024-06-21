import {Component, Input} from '@angular/core';
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {OpenVraag} from "../../model/open-vraag";

@Component({
  selector: 'app-open-vraag',
  standalone: true,
  imports: [],
  templateUrl: './open-vraag.component.html',
  styleUrl: './open-vraag.component.css'
})
export class OpenVraagComponent {
  @Input() openVraag?: OpenVraag;

  private _beschrijving: string = "";

  public getBeschrijving(): string {
    return this._beschrijving;
  }
}
