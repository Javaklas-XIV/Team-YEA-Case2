import {Component} from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";
import {AsyncPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {User} from "../../domain/User";

@Component({
  selector: 'app-accountbeheer',
  standalone: true,
  imports: [
    MenubarMedewerkerComponent,
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './accountbeheer.component.html',
  styleUrl: './accountbeheer.component.css'
})
export class AccountbeheerComponent {

  constructor(private service: UserService, private router: Router) {
  }

  user: User = {} as User;
  message$ = this.service.message$;
  isAdmin = false;

  register() {
    if (this.isAdmin) {
      this.service.isAdmin = true;
    }
    this.service.register(this.user);
  }

  onCheckboxChange(){
    this.isAdmin = true;
  }
}

