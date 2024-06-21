import { Component } from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";

@Component({
  selector: 'app-medewerker-overzicht',
  standalone: true,
  imports: [
    MenubarMedewerkerComponent
  ],
  templateUrl: './medewerker-overzicht.component.html',
  styleUrl: './medewerker-overzicht.component.scss'
})
export class MedewerkerOverzichtComponent {

}
