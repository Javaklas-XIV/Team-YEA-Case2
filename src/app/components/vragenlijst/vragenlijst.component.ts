import {Component} from '@angular/core';
import {VragenlijstService} from "../../services/vragenlijst.service";
import {FormulierObject} from "../../model/formulier-object";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {FormulierOnderdeel} from "../../model/formulier-onderdeel";
import {FormulierOnderdeelComponent} from "../formulier-onderdeel/formulier-onderdeel.component";
import {environment} from "../../../environments/environment.development";
import {Antwoord} from "../../model/antwoord";
import {IngevuldeVragenlijst} from "../../model/ingevulde-vragenlijst";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-vragenlijst',
  standalone: true,
  imports: [
    FormulierOnderdeelComponent
  ],
  templateUrl: './vragenlijst.component.html',
  styleUrl: './vragenlijst.component.css'
})
export class VragenlijstComponent {
  protected vragenlijst: FormulierOnderdeel[] = [];
  protected deelParam: number = -1;
  protected deel: number = 0;
  private antwoordenMap = new Map<number, Antwoord>();

  protected get deelIndex(): number {
    return this.deelParam - 1;
  };

  constructor(private route: ActivatedRoute, private service: VragenlijstService, private router: Router) {
    this.getVragenlijst();
    // this.deelParam = parseInt(this.route.snapshot.queryParamMap.get('deel') ?? "");
    // this.deel = parseInt(this.route.snapshot.queryParamMap.get('deel') ?? "")-1;
  }


  getVragenlijst() {
    this.service.getVragenlijst().subscribe(x => {
      this.vragenlijst = x;
    });
  }

  isFormulierOnderdeel(fo: FormulierObject): fo is FormulierOnderdeel {
    return fo.type === 'F';
  }

  volgende() {
    // this.router.navigateByUrl(`localhost:4200/vragenlijst/:id?deel=`+ ++this.deelParam);
    // this.router.navigateByUrl(`${environment.backendUrl}/vragenlijst/:id?deel=`+ ++this.deelParam);
    // this.router.navigate(['/vragenlijst/:id'], {queryParams: {deel: ++this.deelParam}});
    // this.router.navigate(['/vragenlijst/:id?deel=', ++this.deelParam]);
    this.deel++;
  }

  vorige() {
    // this.router.navigateByUrl(`localhost:4200/vragenlijst/:id?deel=`+ --this.deelParam);
    // this.router.navigateByUrl(`${environment.backendUrl}/vragenlijst/:id?deel=`+ --this.deelParam);
    // this.router.navigate(['/vragenlijst/:id'], {queryParams: {deel: --this.deelParam}});
    // this.router.navigate(['/vragenlijst/:id?deel=', --this.deelParam]);
    this.deel--;
  }

  isDeel(x: number) {
    return x === this.deel;
  }

  addAntwoorden(aMap: Map<number, Antwoord>) {
    this.antwoordenMap = new Map([...this.antwoordenMap, ...aMap]);
    console.log(this.antwoordenMap)
  }

  saveAntwoorden() {
    console.log("save-antwoorden-1");
    const a = Array.from(this.antwoordenMap.values());
    const iv: IngevuldeVragenlijst = {antwoorden: a} as IngevuldeVragenlijst;
    console.log('ingevulde lijst 1:',iv)
    this.service.createIngevuldeVragenlijst(iv).subscribe(
      x => console.log('ingevulde lijst 2:',x));
    console.log("save-antwoorden-2");
  }

  protected readonly onclick = onclick;
}
