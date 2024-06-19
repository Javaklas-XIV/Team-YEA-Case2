import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-menubar-admin',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menubar-admin.component.html',
  styleUrl: './menubar-admin.component.scss'
})
export class MenubarAdminComponent {

  constructor(private userService: UserService, private router: Router) {
  }

  logOut(){
    return this.userService.logout();
  }

  goToAccount() {
    this.router.navigateByUrl("admin/accountbeheer")
  }
}
