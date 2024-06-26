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
  private _subjectSimple: Subject<IngevuldeVragenlijst[]> = new Subject();
  private _subjectAll: Subject<IngevuldeVragenlijst[]> = new Subject();

  constructor(private http: HttpClient, private router: Router) {
  }

  activateVragenlijst(id: number, m: number[]) {
    let tempObservable = this.http.post<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/${id}`, m);
    this.message$.next("Vragenlijsten zijn toegevoegd");
    return tempObservable
  }

  getIngevuldeVragenlijstSimple(id: number): Observable<IngevuldeVragenlijst[]>{
    let tempObservable = this.http.get<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten?userId=${id}`)
    tempObservable.subscribe(result => this._subjectSimple.next(result));
    return tempObservable;
  }

  getAlleIngevuldeVragenlijsten() {
    let tempObservable = this.http.get<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/all`)
    tempObservable.subscribe(result => this._subjectAll.next(result));
    return tempObservable;
  }

  getAlleIngevuldeVragenlijstenByUserId(userId:number) {
    let tempObservable = this.http.get<IngevuldeVragenlijst[]>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten?userId=${userId}`)
    tempObservable.subscribe(result => this._subjectAll.next(result));
    return tempObservable;
  }

  remove(i: IngevuldeVragenlijst) {
    return this.http.delete<IngevuldeVragenlijst>(`http://localhost:9080/yea-backend/ingevuldevragenlijsten/${i.ingevulde_vragenlijst_id}`);
  }

  get subjectSimple(){
    return this._subjectSimple;
  }

  get subjectAll(){
    return this._subjectAll
  }
}
