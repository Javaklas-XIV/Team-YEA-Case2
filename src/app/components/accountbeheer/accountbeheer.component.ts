import {Component, OnInit} from '@angular/core';
import {MenubarMedewerkerComponent} from "../menubar-medewerker/menubar-medewerker.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {User} from "../../domain/User";
import {Observable, Subject, map} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-accountbeheer',
  standalone: true,
  imports: [
    MenubarMedewerkerComponent,
    AsyncPipe,
    FormsModule,
    NgForOf,
    MatPaginator
  ],
  templateUrl: './accountbeheer.component.html',
  styleUrl: './accountbeheer.component.css'
})
export class AccountbeheerComponent implements OnInit {

  user: User = {} as User;
  message$ = this.service.message$;
  deleteMessage$ = new Subject<string>();
  isAdmin = false;
  public subject: Subject<User[]>;
  $users: Observable<User[]> | undefined;

  constructor(private service: UserService, private router: Router) {
    this.subject = this.service.subject;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  register() {
    if(this.isAdmin) {
      this.service.isAdmin = true;
    } else {
      this.service.isAdmin = false;
    }
    this.service.register(this.user);
  }

  onCheckboxChange() {
  }

  getAllUsers() {
    this.$users = this.service.findAllUsers();
  }

  remove(u: User) {
    if (confirm('Wil je deze gebruiker echt verwijderen?')) {
      this.service.remove(u).subscribe(() => this.getAllUsers());
      // if (this.getUser(u) !== undefined) {
      //   this.deleteMessage$.next("Gebruiker heeft nog ingevulde vragenlijsten!")
      // }
    }
  }

  goToDetails(u: User) {
    this.router.navigate(['/admin/accountbeheer', u.ID])
  }

  private getUser(u: User) {
    return this.service.findUser(u.ID);
  }
}

