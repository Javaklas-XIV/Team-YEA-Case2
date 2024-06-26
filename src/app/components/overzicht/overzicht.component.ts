import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {MenubarClientComponent} from "../menubar-client/menubar-client.component";

@Component({
  selector: 'app-overzicht',
  standalone: true,
  imports: [
    MenubarClientComponent
  ],
  templateUrl: './overzicht.component.html',
  styleUrl: './overzicht.component.css'
})
export class OverzichtComponent {
  constructor(private userService: UserService, private router: Router) {
  }
}
