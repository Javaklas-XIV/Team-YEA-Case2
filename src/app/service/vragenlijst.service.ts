import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {Vragenlijst} from "../domain/Vragenlijst";

@Injectable({
  providedIn: 'root'
})
export class VragenlijstService {
  private _vSubject: Subject<Vragenlijst[]> = new Subject();

  constructor(private http: HttpClient, private router: Router) {}

  get vSubject(){
    return this._vSubject;
  }

  findVragenlijsten(): Observable<Vragenlijst[]>{
    let tempObservable = this.http.get<Vragenlijst[]>(`${'http://localhost:9080/yea-backend/vragenlijsten'}`);
    tempObservable.subscribe(result => this._vSubject.next(result as Vragenlijst[]));
    return tempObservable;
  }
}


