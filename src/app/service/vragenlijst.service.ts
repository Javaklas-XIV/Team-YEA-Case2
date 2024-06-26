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
  public message$ = new Subject<string>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  findVragenlijsten(): Observable<Vragenlijst[]>{
    let tempObservable = this.httpClient.get<Vragenlijst[]>(`${'http://localhost:9080/yea-backend/vragenlijsten'}`);
    tempObservable.subscribe(result => this._vSubject.next(result as Vragenlijst[]));
    return tempObservable;
  }


  getVragenlijst(id: number) {
    return this.httpClient.get<VragenlijstOnderdeel[]>(`${this.URL}/${id}`)
  }


  addDefaultVragenlijst() {
    this.message$.next("Nieuwe default vragenlijst is aangemaakt")
    return this.httpClient.post<Vragenlijst>(`${this.URL}/default`, {observe: 'response'})
      .subscribe();
  }
}

