import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {OverzichtComponent} from "./components/overzicht/overzicht.component";
import {MedewerkerOverzichtComponent} from "./components/medewerker-overzicht/medewerker-overzicht.component";
import {AccountbeheerComponent} from "./components/accountbeheer/accountbeheer.component";
import {authGuardClient} from "./guards/authGuardClient";
import {authGuardMedewerker} from "./guards/authGuardMedewerker";
import {
  MedewerkerVragenlijstBeheerComponent
} from "./components/medewerker-vragenlijst-beheer/medewerker-vragenlijst-beheer.component";
import {
  MedewerkerIngevuldeBeheerComponent
} from "./components/medewerker-ingevulde-beheer/medewerker-ingevulde-beheer.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: OverzichtComponent, canActivate: [authGuardClient]},
  {path: 'admin/accountbeheer', component: AccountbeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin/vragenlijstbeheer', component: MedewerkerVragenlijstBeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin/ingevuldebeheer', component: MedewerkerIngevuldeBeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin', component: MedewerkerOverzichtComponent, canActivate: [authGuardMedewerker]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

