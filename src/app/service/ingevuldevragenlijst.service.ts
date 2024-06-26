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
  private _subject: Subject<IngevuldeVragenlijst[]> = new Subject();

  constructor(private http: HttpClient, private router: Router) {
  }

  activateVragenlijst(id: number, m: number[]) {
    this.message$.next("Vragenlijsten zijn toegevoegd");
    return this.http.post<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/${id}`, m).subscribe(result => this._subject.next(result));
  }

  getIngevuldeVragenlijstDates(id: number): Observable<IngevuldeVragenlijst[]>{
    let tempObservable = this.http.get<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten?userId=${id}`)
    tempObservable.subscribe(result => this._subject.next(result));
    return tempObservable;
  }

  getAlleIngevuldeVragenlijsten() {
    let tempObservable = this.http.get<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/all`)
    tempObservable.subscribe(result => this._subject.next(result));
    return tempObservable;
  }

  remove(i: IngevuldeVragenlijst) {
    return this.http.delete<IngevuldeVragenlijst>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/${i.ingevulde_vragenlijst_id}`);
  }

  get subject(){
    return this._subject;
  }
}
