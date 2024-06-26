import {Component, OnInit} from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";
import {User} from "../../domain/User";
import {Subject} from "rxjs";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {VragenlijstService} from "../../service/vragenlijst.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-medewerker-vragenlijst-beheer',
  standalone: true,
  imports: [
    MenubarMedewerkerComponent,
    AsyncPipe
  ],
  templateUrl: './medewerker-vragenlijst-beheer.component.html',
  styleUrl: './medewerker-vragenlijst-beheer.component.css'
})
export class MedewerkerVragenlijstBeheerComponent implements OnInit {
  message$ = this.service.message$;

  constructor(private service: VragenlijstService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addVragenlijst() {
    this.service.addDefaultVragenlijst();
  }
}
