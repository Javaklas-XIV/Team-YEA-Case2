import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-menubar-medewerker',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menubar-medewerker.component.html',
  styleUrl: './menubar-medewerker.component.scss'
})
export class MenubarMedewerkerComponent {

  constructor(private userService: UserService, private router: Router) {
  }

  logOut(){
    return this.userService.logout();
  }

  goToAccount() {
    this.router.navigateByUrl("admin/accountbeheer")
  }
}
