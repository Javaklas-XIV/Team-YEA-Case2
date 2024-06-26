import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {VragenlijstOnderdeel} from "../model/vragenlijst-onderdeel";
import {IngevuldeVragenlijst} from "../model/ingevulde-vragenlijst";

@Injectable({
  providedIn: 'root'
})
export class VragenlijstService {
  URL = `${environment.backendUrl}/vragenlijsten`;
  constructor(private httpClient: HttpClient) { }

  getVragenlijst() {
    return this.httpClient.get<VragenlijstOnderdeel[]>(`${this.URL}/1`)
  }

  createIngevuldeVragenlijst(iv: IngevuldeVragenlijst) {
    return this.httpClient.post<IngevuldeVragenlijst>(`${this.URL}/1`, iv);
  }


}
