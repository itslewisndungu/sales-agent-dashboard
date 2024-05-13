import { Component, OnInit } from "@angular/core";
import { SchoolsService } from "../../services/schools.service";
import { NzTableModule } from "ng-zorro-antd/table";
import { CommonModule } from "@angular/common";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { RouterLink } from "@angular/router";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { School } from "../../types/types";

@Component({
  selector: "app-schools-list",
  standalone: true,
  imports: [CommonModule, NzTableModule, NzButtonModule, NzIconDirective, NzDropDownModule, RouterLink, NzTagComponent],
  templateUrl: "./schools-list.component.html",
  styleUrl: "./schools-list.component.css"
})
export class SchoolsListComponent implements OnInit {
  schools: School[] = [];
  isFetchingSchools = false;

  constructor(readonly schoolsService: SchoolsService) {
  }

  ngOnInit() {
    this.isFetchingSchools = true;

    this.schoolsService.getAllSchoolsList().subscribe(
      {
        next: (data: School[]) => {
          this.schools = data;
          this.isFetchingSchools = false;
        },
        error: (error: any) => {
          this.schools = [];
          console.error("Error: ", error);
          this.isFetchingSchools = false;
        }
      }
    );
  }

}
