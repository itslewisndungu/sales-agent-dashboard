import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzAffixModule } from "ng-zorro-antd/affix";
import { School } from "../../types/types";

@Component({
  selector: "app-school-details",
  standalone: true,
  imports: [
    NzTabsModule, RouterModule, NzAffixModule
  ],
  templateUrl: "./school-details.component.html",
  styleUrl: "./school-details.component.css"
})
export class SchoolDetailsComponent implements OnInit{
  school?: School

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({school}) => {
      this.school = school;
    });
  }
}
