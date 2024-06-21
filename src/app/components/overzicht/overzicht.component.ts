import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-overzicht',
  standalone: true,
  imports: [],
  templateUrl: './overzicht.component.html',
  styleUrl: './overzicht.component.css'
})
export class OverzichtComponent {
  constructor(private userService: UserService, private router: Router) {
  }

  logOut(){
    return this.userService.logout();
  }
}
