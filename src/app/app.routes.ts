import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {OverzichtComponent} from "./components/overzicht/overzicht.component";
import {AdminOverzichtComponent} from "./components/admin-overzicht/admin-overzicht.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: OverzichtComponent},
  {path: 'admin', component: AdminOverzichtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

