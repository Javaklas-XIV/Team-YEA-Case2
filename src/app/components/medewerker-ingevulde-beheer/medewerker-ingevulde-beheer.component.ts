import {Component, OnInit} from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {VragenlijstService} from "../../service/vragenlijst.service";
import {IngevuldevragenlijstService} from "../../service/ingevuldevragenlijst.service";
import {Observable} from "rxjs";
import {IngevuldeVragenlijst} from "../../domain/IngevuldeVragenlijst";
import {User} from "../../domain/User";

@Component({
  selector: 'app-medewerker-ingevulde-beheer',
  standalone: true,
  imports: [
    MenubarMedewerkerComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './medewerker-ingevulde-beheer.component.html',
  styleUrl: './medewerker-ingevulde-beheer.component.css'
})
export class MedewerkerIngevuldeBeheerComponent implements OnInit{

  ingevuldeVragenlijsten$: Observable<IngevuldeVragenlijst[]> | undefined;

  constructor(private route: ActivatedRoute,
              private service: UserService,
              private vService: VragenlijstService,
              private iService: IngevuldevragenlijstService
  ) {}

  ngOnInit() {
    this.ingevuldeVragenlijsten$ = this.iService.getAlleIngevuldeVragenlijsten()
  }

  remove(i: IngevuldeVragenlijst) {
    if (confirm('Wil je deze ingevulde vragenlijst echt verwijderen?')) {
      this.iService.remove(i).subscribe(() => this.getAllIngevuldeVragenLijsten());
    }
    window.location.reload();
  }

  private getAllIngevuldeVragenLijsten() {
    return this.iService.getAlleIngevuldeVragenlijsten()
  }
}
