import {Component, OnInit} from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";
import {User} from "../../domain/User";
import {Subject} from "rxjs";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medewerker-vragenlijst-beheer',
  standalone: true,
  imports: [
    MenubarMedewerkerComponent
  ],
  templateUrl: './medewerker-vragenlijst-beheer.component.html',
  styleUrl: './medewerker-vragenlijst-beheer.component.css'
})
export class MedewerkerVragenlijstBeheerComponent implements OnInit {
  // public subject: Subject <User[]>;

  constructor(private userService: UserService, private router: Router) {
    // this.subject = this.userService.subject;
  }

  ngOnInit(): void {
  }
}
