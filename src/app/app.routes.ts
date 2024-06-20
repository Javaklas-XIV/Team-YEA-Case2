import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {OverzichtComponent} from "./components/overzicht/overzicht.component";
import {MedewerkerOverzichtComponent} from "./components/medewerker-overzicht/medewerker-overzicht.component";
import {AccountbeheerComponent} from "./components/accountbeheer/accountbeheer.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: OverzichtComponent},
  {path: 'admin/accountbeheer', component: AccountbeheerComponent},
  {path: 'admin', component: MedewerkerOverzichtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

