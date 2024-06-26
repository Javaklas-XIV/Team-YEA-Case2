import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../domain/User";
import {Observable, Subject} from "rxjs";
import {IngevuldeVragenlijst} from "../domain/IngevuldeVragenlijst";

@Injectable({
  providedIn: 'root'
})
export class IngevuldevragenlijstService {

  public message$ = new Subject<string>();
  constructor(private http: HttpClient, private router: Router) {
  }

  activateVragenlijst(id: number, m: number[]) {
    this.message$.next("Vragenlijsten zijn toegevoegd");
    return this.http.post<User>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/${id}`, m).subscribe();
  }

  getIngevuldeVragenlijstDates(id: number): Observable<IngevuldeVragenlijst[]>{
    let tempObservable = this.http.get<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten?userId=${id}`)
    tempObservable.subscribe();
    return tempObservable;
  }

  getAlleIngevuldeVragenlijsten() {
    let tempObservable = this.http.get<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/all`)
    tempObservable.subscribe();
    return tempObservable;
  }

  remove(i: IngevuldeVragenlijst) {
    return this.http.delete<IngevuldeVragenlijst>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/${i.ingevulde_vragenlijst_id}`);
  }
}
