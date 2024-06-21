import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {FormulierObject} from "../model/formulier-object";
import {VragenlijstFragment} from "../model/vragenlijst-fragment";
import {FormulierOnderdeel} from "../model/formulier-onderdeel";

@Injectable({
  providedIn: 'root'
})
export class VragenlijstService {
  URL = `${environment.backendUrl}/vragenlijsten`;
  constructor(private httpClient: HttpClient) { }

  getHello() {
    return this.httpClient.get<string>(this.URL);
  }

  getVragenlijst() {
    return this.httpClient.get<FormulierOnderdeel[]>(`${this.URL}/1`)
  }
}
