import { Injectable } from '@angular/core';
import {IngevuldeVragenlijst} from "../model/ingevulde-vragenlijst";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class IngevuldeVragenlijstService {

  URL = `${environment.backendUrl}/ingevuldevragenlijsten`;

  constructor(private httpClient: HttpClient) { }

  createIngevuldeVragenlijst(iv: IngevuldeVragenlijst) {
    return this.httpClient.post<IngevuldeVragenlijst>(`${this.URL}`, iv);
  }

  editIngevuldeVragenlijst(iv: IngevuldeVragenlijst) {
    return this.httpClient.put<IngevuldeVragenlijst>(`${this.URL}`, iv);
  }
}
