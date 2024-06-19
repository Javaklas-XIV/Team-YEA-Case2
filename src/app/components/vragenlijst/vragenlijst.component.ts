import { Component } from '@angular/core';
import {VragenlijstService} from "../../services/vragenlijst.service";
import {FormulierObject} from "../../model/formulier-object";
import {VragenlijstFragment} from "../../model/vragenlijst-fragment";

@Component({
  selector: 'app-vragenlijst',
  standalone: true,
  imports: [],
  templateUrl: './vragenlijst.component.html',
  styleUrl: './vragenlijst.component.css'
})
export class VragenlijstComponent {

  private helloMessage: string = "";
  // protected vragenlijst: FormulierObject = {
  //   beschrijving: ""
  // };
  protected vragenlijst: VragenlijstFragment[] = [];

  constructor(private service: VragenlijstService) {
    // console.log(this.service.getVragenlijst().subscribe(
    //   x => {console.log(this.vragenlijst)}));
    // console.log(this.vragenlijst);
    this.getVragenlijst()
  }

  getHello() {
    // return this.service.getHello().subscribe(m => this.helloMessage = m);
  }

  getVragenlijst() {
    return this.service.getVragenlijst().subscribe(
      x => {this.vragenlijst = x; console.log(this.vragenlijst)});
  }
}
