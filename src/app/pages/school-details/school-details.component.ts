import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzAffixModule } from "ng-zorro-antd/affix";

@Component({
  selector: "app-school-details",
  standalone: true,
  imports: [
    NzTabsModule, RouterModule, NzAffixModule
  ],
  templateUrl: "./school-details.component.html",
  styleUrl: "./school-details.component.css"
})
export class SchoolDetailsComponent {

}
