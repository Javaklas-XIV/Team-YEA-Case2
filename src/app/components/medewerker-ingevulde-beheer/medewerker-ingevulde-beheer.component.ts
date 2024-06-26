import { Component } from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";

@Component({
  selector: 'app-medewerker-ingevulde-beheer',
  standalone: true,
    imports: [
        MenubarMedewerkerComponent
    ],
  templateUrl: './medewerker-ingevulde-beheer.component.html',
  styleUrl: './medewerker-ingevulde-beheer.component.css'
})
export class MedewerkerIngevuldeBeheerComponent {

}
