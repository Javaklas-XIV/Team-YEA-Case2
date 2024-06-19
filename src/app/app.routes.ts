import { Routes } from '@angular/router';
import {VragenlijstComponent} from "./components/vragenlijst/vragenlijst.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path: 'vragenlijst', component: AppComponent},
  {path: 'vragenlijst/:id', component: VragenlijstComponent},
];
