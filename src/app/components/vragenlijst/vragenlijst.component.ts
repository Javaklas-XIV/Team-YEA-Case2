import { Component } from '@angular/core';
import {VragenlijstService} from "../../services/vragenlijst.service";
import {FormulierObject} from "../../model/formulier-object";
import {VragenlijstFragment} from "../../model/vragenlijst-fragment";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {castTo} from "../../util/cast-to";
import {MeerkeuzeVraag} from "../../model/meerkeuze-vraag";

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
  protected vragenlijst: FormulierOnderdeel[] = [];
  protected vragenlijst$: Subject<FormulierOnderdeel[]> = new Subject<FormulierOnderdeel[]>();
  protected vragenlijstdeel: VragenlijstFragment[] = [];
  protected deel: number = -1;
  protected $meerkeuzevraag = castTo<MeerkeuzeVraag>();
  protected test: string = "<p>Dit is een test</p>"

  constructor(private route: ActivatedRoute, private service: VragenlijstService) {
    // console.log(this.service.getVragenlijst().subscribe(
    //   x => {console.log(this.vragenlijst)}));
    // console.log(this.vragenlijst);
    // this.vragenlijst = [{beschrijving: 'test', onderdelen: []}];
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
    return this.service.getVragenlijst().subscribe(x => {this.vragenlijst = x; console.log("vl:",this.vragenlijst)});
    // return this.service.getVragenlijst().subscribe(
    //   x => {next: (v: Subject<VragenlijstFragment[]>) => x});
    // return {next(value: VragenlijstFragment[]) {() =>}
    // this.service.getVragenlijst().subscribe(
    //   v => {this.vragenlijst$.next(v);
    //   console.log('v: ', v);
    //   console.log('v$: ', this.vragenlijst$)
    //   });
  }

  getVragenlijstdeel() {
    console.log("vragenlijst:", this.vragenlijst)
    console.log("deel:", this.deel)
    console.log("lijstdeel:", this.vragenlijst[this.deel ?? 0])
    return this.vragenlijst[this.deel ?? 0];
  }

  createFormElements(delen: FormulierOnderdeel[]) {
    const fragment = document.createDocumentFragment();
    console.log('fields: ', typeof delen);
    delen.forEach((x) => {
      console.log("x.beschrijving:", x.beschrijving);
      const d = document.createElement('div');
      d.textContent = x.beschrijving;
      fragment.appendChild(d);
    });

    // fields.forEach((field.beschrijving) => {
    //   console.log("fields.beschrijving:", fields.beschrijving)
    //   const d = document.createElement('div');
    //   d.textContent = fields.beschrijving;
    //   fragment.appendChild(d);
    // });

    // for (let f:FormulierOnderdeel in fields) {
    //   const d = document.createElement('div');
    //   d.textContent = (f as FormulierOnderdeel).beschrijving;
    // }

    // fields.forEach((x : any) => {
    //   console.log('field: ', x, );
    //   const container = document.createElement('div');
    //   // // container.classList.add('form-group');
    //   //
    //   // const div = document.createElement('div');
    //   // div.textContent = field.beschrijving;
    //   // container.appendChild(div);
    //   const subContainer = document.createElement('div');
    //   subContainer.textContent = x.beschrijving;
    //   container.appendChild(subContainer);
    //
    //   // if (field.type === 'group' && field.children) {
    //   //   const subContainer = createFormElements(field.children);
    //   //   container.appendChild(subContainer);
    //   // } else {
    //   //   const input = document.createElement('input');
    //   //   input.type = field.type;
    //   //   input.name = field.name;
    //   //   container.appendChild(input)
    //   // }
    //
    //   fragment.appendChild(container);
    // });
    return fragment;
  }

  test2() {
    const container = document.getElementById('form-container');

    const formElements = this.createFormElements(this.vragenlijst);
    const form = document.createElement('form')
    form.appendChild(formElements);

    container?.appendChild(form);
  }

}
