import { Component } from "@angular/core";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import { School } from "../../types/types";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-school-primary-info",
  standalone: true,
  imports: [
    NzDescriptionsModule,
    NzBadgeModule,
    NzTagComponent,
    NzButtonComponent,
    CurrencyPipe,
    DatePipe,
    NgForOf,
  ],
  templateUrl: "./school-primary-info.component.html",
  styleUrl: "./school-primary-info.component.css",
})
export class SchoolPrimaryInfoComponent {
  school?: School;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ school }) => {
      this.school = school;
    });
  }
}
