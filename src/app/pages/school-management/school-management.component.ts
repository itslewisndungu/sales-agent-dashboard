import { Component } from '@angular/core';
import { SchoolsListComponent } from "../../components/schools-list/schools-list.component";

@Component({
  selector: 'app-school-management',
  standalone: true,
  imports: [
    SchoolsListComponent
  ],
  templateUrl: './school-management.component.html',
  styleUrl: './school-management.component.css'
})
export class SchoolManagementComponent {

}
