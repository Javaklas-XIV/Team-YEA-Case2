import {Component} from '@angular/core';
import {User} from "../../domain/User";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../service/user.service";
import {FormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {UserRoles} from "../../util/enum";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {} as User;
  message$ = this.service.message$;
  constructor(private service: UserService, private router: Router) {
  }

  login(): void {
    this.service.login(this.user)
    this.user = {} as User;
    }
}

