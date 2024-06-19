import { Component } from '@angular/core';
import {VragenlijstService} from "../../services/vragenlijst.service";
import {FormulierObject} from "../../model/formulier-object";
import {VragenlijstFragment} from "../../model/vragenlijst-fragment";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";

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
  protected vragenlijst$: Subject<VragenlijstFragment[]> = new Subject<VragenlijstFragment[]>();
  protected vragenlijstdeel: VragenlijstFragment[] = [];
  protected deel: number = -1;

  constructor(private route: ActivatedRoute, private service: VragenlijstService) {
    // console.log(this.service.getVragenlijst().subscribe(
    //   x => {console.log(this.vragenlijst)}));
    // console.log(this.vragenlijst);
    this.vragenlijst = [{beschrijving: 'test', onderdelen: []}];
    this.getVragenlijst();
    // setTimeout(() => {2});
    console.log("vl2:", this.vragenlijst)
    this.deel = parseInt(this.route.snapshot.queryParamMap.get('deel') ?? "")-1;
    console.log('deel: ', this.deel)
    // this.getVragenlijstdeel();
    this.vragenlijst$.subscribe(v => {this.vragenlijst = v;
      console.log('v2: ', v);
      console.log('vr: ', this.vragenlijst)});
    this.getVragenlijst();
    console.log("vl3:", this.vragenlijst)
  }



  getHello() {
    // return this.service.getHello().subscribe(m => this.helloMessage = m);
  }

  getTest() {

  }

  getVragenlijst() {
    // return this.service.getVragenlijst().subscribe(x => {this.vragenlijst = x; console.log("vl:",this.vragenlijst)});
    // return this.service.getVragenlijst().subscribe(
    //   x => {next: (v: Subject<VragenlijstFragment[]>) => x});
    // return {next(value: VragenlijstFragment[]) {() =>}
    this.service.getVragenlijst().subscribe(
      v => {this.vragenlijst$.next(v);
      console.log('v: ', v);
      console.log('v$: ', this.vragenlijst$)});
  }

  getVragenlijstdeel() {
    console.log("vragenlijst:", this.vragenlijst)
    console.log("deel:", this.deel)
    console.log("lijstdeel:", this.vragenlijst[this.deel ?? 0])
    return this.vragenlijst[this.deel ?? 0];
  }
}
