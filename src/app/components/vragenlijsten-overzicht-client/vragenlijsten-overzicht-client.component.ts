import {Component, OnInit} from '@angular/core';
import {MenubarClientComponent} from "../menubar-client/menubar-client.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable, Subject} from "rxjs";
import {IngevuldeVragenlijst} from "../../domain/IngevuldeVragenlijst";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {VragenlijstService} from "../../service/vragenlijst.service";
import {IngevuldevragenlijstService} from "../../service/ingevuldevragenlijst.service";

@Component({
  selector: 'app-vragenlijsten-overzicht-client',
  standalone: true,
    imports: [
        MenubarClientComponent,
        AsyncPipe,
        NgForOf
    ],
  templateUrl: './vragenlijsten-overzicht-client.component.html',
  styleUrl: './vragenlijsten-overzicht-client.component.css'
})
export class VragenlijstenOverzichtClientComponent implements OnInit{
  ingevuldeVragenlijsten$: Observable<IngevuldeVragenlijst[]> | undefined;
  public subject: Subject<IngevuldeVragenlijst[]>;

  constructor(private route: ActivatedRoute,
              private service: UserService,
              private vService: VragenlijstService,
              private iService: IngevuldevragenlijstService,
              private router:Router
  ) {this.subject = this.iService.subjectAll;}

  ngOnInit() {
    this.ingevuldeVragenlijsten$ = this.iService.getAlleIngevuldeVragenlijstenByUserId( parseInt(localStorage.getItem("ID") ??"-1"));
  }

  remove(i: IngevuldeVragenlijst) {
    if (confirm('Wil je deze ingevulde vragenlijst echt verwijderen?')) {
      this.iService.remove(i).subscribe(() => this.getAllIngevuldeVragenLijsten());
    }
  }

  private getAllIngevuldeVragenLijsten() {
    return this.iService.getAlleIngevuldeVragenlijstenByUserId(parseInt(localStorage.getItem("ID") ??"-1"));
  }

  public clickEdit(id:number){
    this.router.navigate([`vragenlijst/${id}`]);
  }
}
