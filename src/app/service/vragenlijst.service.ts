import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {Vragenlijst} from "../domain/Vragenlijst";
import {environment} from "../../environments/environment.development";
import {VragenlijstOnderdeel} from "../model/vragenlijst-onderdeel";
import {IngevuldeVragenlijst} from "../model/ingevulde-vragenlijst";


@Injectable({
  providedIn: 'root'
})
export class VragenlijstService {

  private _vSubject: Subject<Vragenlijst[]> = new Subject();
  URL = `${environment.backendUrl}/vragenlijsten`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  get vSubject(){
    return this._vSubject;
  }

  findVragenlijsten(): Observable<Vragenlijst[]>{
    let tempObservable = this.httpClient.get<Vragenlijst[]>(`${'http://localhost:9080/yea-backend/vragenlijsten'}`);
    tempObservable.subscribe(result => this._vSubject.next(result as Vragenlijst[]));
    return tempObservable;
  }


  getVragenlijst() {
    return this.httpClient.get<VragenlijstOnderdeel[]>(`${this.URL}/1`)
  }

  createIngevuldeVragenlijst(iv: IngevuldeVragenlijst) {
    return this.httpClient.post<IngevuldeVragenlijst>(`${this.URL}/1`, iv);
  }

}

