import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-menubar-client',
  standalone: true,
  imports: [],
  templateUrl: './menubar-client.component.html',
  styleUrl: './menubar-client.component.css'
})
export class MenubarClientComponent {
  constructor(private router: Router, private userService: UserService) {
  }

  goToAccount() {
    this.router.navigate(['account'])
  }

  goToUwVragenlijsten() {
    this.router.navigate(['uwvragenlijsten'])
  }

  logOut(){
    return this.userService.logout();
  }
}
