import { Component } from '@angular/core';

@Component({
  selector: 'app-open-vraag',
  standalone: true,
  imports: [],
  templateUrl: './open-vraag.component.html',
  styleUrl: './open-vraag.component.css'
})
export class OpenVraagComponent {

  private _beschrijving: string = "";

  constructor(beschrijving: string) {
    this._beschrijving = beschrijving;
  }

  public getBeschrijving(): string {
    return this._beschrijving;
  }
}
