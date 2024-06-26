import { Injectable } from '@angular/core';
import {IngevuldeVragenlijst} from "../model/ingevulde-vragenlijst";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {VragenlijstOnderdeel} from "../model/vragenlijst-onderdeel";

@Injectable({
  providedIn: 'root'
})
export class IngevuldeVragenlijstService {

  URL = `${environment.backendUrl}/ingevuldevragenlijsten`;

  constructor(private httpClient: HttpClient) { }

  getIngevuldeVragenlijst(id: number) {
    return this.httpClient.get<IngevuldeVragenlijst>(`${this.URL}/${id}`)
  }

  createIngevuldeVragenlijst(iv: IngevuldeVragenlijst) {
    return this.httpClient.post<IngevuldeVragenlijst>(`${this.URL}`, iv);
  }

  editIngevuldeVragenlijst(id:number, iv: IngevuldeVragenlijst) {
    return this.httpClient.put<IngevuldeVragenlijst>(`${this.URL}/${id}`, iv);
  }

}
