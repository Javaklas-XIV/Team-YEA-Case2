import {Component, OnInit} from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../domain/User";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {identity, Observable, Subject} from "rxjs";
import {Vragenlijst} from "../../domain/Vragenlijst";
import {VragenlijstService} from "../../service/vragenlijst.service";
import {FormsModule} from "@angular/forms";
import {IngevuldevragenlijstService} from "../../service/ingevuldevragenlijst.service";
import {IngevuldeVragenlijst} from "../../domain/IngevuldeVragenlijst";

@Component({
  selector: 'app-accountsbeheer',
  standalone: true,
  imports: [
    MenubarMedewerkerComponent,
    AsyncPipe,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './accountsbeheer.component.html',
  styleUrl: './accountsbeheer.component.css'
})
export class AccountsbeheerComponent implements OnInit {
  user$: Observable<User> | undefined;
  checkboxStates: { [key: number]: boolean } = {};
  vragenlijst$: Observable<Vragenlijst[]> | undefined;
  ingevuldeVragenlijst$: Observable<IngevuldeVragenlijst[]> | undefined;
  magInvullenlijst: number[] = [];
  id: number = 0;
  message$ = this.iService.message$;
  public subject: Subject<IngevuldeVragenlijst[]>;

  constructor(private route: ActivatedRoute,
              private service: UserService,
              private vService: VragenlijstService,
              private iService: IngevuldevragenlijstService
  ) {   this.subject = this.iService.subject;
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('ID')
    this.id = Number(idParam)
    this.user$ = this.service.findUser(this.id);
    this.vragenlijst$ = this.vService.findVragenlijsten()
    this.ingevuldeVragenlijst$ = this.iService.getIngevuldeVragenlijstDates(this.id)
  }

  onCheckboxChange(id: number) {
  }

  save() {
    if (confirm('Weet u zeker dat u wilt opslaan?')) {
      this.magInvullenlijst = [];
      for (const [id, state] of Object.entries(this.checkboxStates)) {
        if (state) {
          this.magInvullenlijst.push(Number(id));
        }
      }
      this.iService.activateVragenlijst(this.id, this.magInvullenlijst);
    }
  }
}

