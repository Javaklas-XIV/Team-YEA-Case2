import { Component } from '@angular/core';
import {MenubarClientComponent} from "../menubar-client/menubar-client.component";

@Component({
  selector: 'app-accountbeheer-client',
  standalone: true,
  imports: [
    MenubarClientComponent
  ],
  templateUrl: './accountbeheer-client.component.html',
  styleUrl: './accountbeheer-client.component.css'
})
export class AccountbeheerClientComponent {

}
