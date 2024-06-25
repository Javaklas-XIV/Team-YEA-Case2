import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {OverzichtComponent} from "./components/overzicht/overzicht.component";
import {MedewerkerOverzichtComponent} from "./components/medewerker-overzicht/medewerker-overzicht.component";
import {AccountbeheerComponent} from "./components/accountbeheer/accountbeheer.component";
import {authGuardClient} from "./guards/authGuardClient";
import {authGuardMedewerker} from "./guards/authGuardMedewerker";
import {VragenlijstInvullenComponent} from "./components/vragenlijst-invullen/vragenlijst-invullen.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: OverzichtComponent, canActivate: [authGuardClient]},
  {path: 'admin/accountbeheer', component: AccountbeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin', component: MedewerkerOverzichtComponent, canActivate: [authGuardMedewerker]},
  {path: 'vragenlijst/:id', component: VragenlijstInvullenComponent},
];
``
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

