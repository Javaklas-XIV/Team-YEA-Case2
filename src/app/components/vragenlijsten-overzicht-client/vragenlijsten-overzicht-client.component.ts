import { Component } from '@angular/core';
import {MenubarClientComponent} from "../menubar-client/menubar-client.component";

@Component({
  selector: 'app-vragenlijsten-overzicht-client',
  standalone: true,
  imports: [
    MenubarClientComponent
  ],
  templateUrl: './vragenlijsten-overzicht-client.component.html',
  styleUrl: './vragenlijsten-overzicht-client.component.css'
})
export class VragenlijstenOverzichtClientComponent {

}
