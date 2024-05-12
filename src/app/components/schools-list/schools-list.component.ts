import { Component, OnInit } from "@angular/core";
import { SchoolsService } from "../../services/schools.service";
import { NzTableModule } from "ng-zorro-antd/table";
import { CommonModule } from "@angular/common";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { RouterLink } from "@angular/router";
import { NzTagComponent } from "ng-zorro-antd/tag";

@Component({
  selector: "app-schools-list",
  standalone: true,
  imports: [CommonModule, NzTableModule, NzButtonModule, NzIconDirective, NzDropDownModule, RouterLink, NzTagComponent],
  templateUrl: "./schools-list.component.html",
  styleUrl: "./schools-list.component.css"
})
export class SchoolsListComponent implements OnInit {
  schools?: any;

  constructor(readonly SchoolsService: SchoolsService) {
  }

  ngOnInit() {
    this.schools = this.SchoolsService.getAllSchoolsList();
  }
}
