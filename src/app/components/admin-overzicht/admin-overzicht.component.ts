import { Component } from '@angular/core';
import {MenubarAdminComponent} from "../menubar-admin/menubar-admin.component";

@Component({
  selector: 'app-admin-overzicht',
  standalone: true,
  imports: [
    MenubarAdminComponent
  ],
  templateUrl: './admin-overzicht.component.html',
  styleUrl: './admin-overzicht.component.scss'
})
export class AdminOverzichtComponent {

}
