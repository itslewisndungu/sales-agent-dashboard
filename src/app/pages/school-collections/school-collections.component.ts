import { Component, OnInit } from "@angular/core";
import { CollectionsService } from "../../services/collections.service";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTagModule } from "ng-zorro-antd/tag";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzIconDirective } from "ng-zorro-antd/icon";

@Component({
  selector: "app-school-collections",
  standalone: true,
  imports: [NzTableModule, NzTagModule, CurrencyPipe, NgForOf, DatePipe, NzButtonComponent, NzIconDirective],
  templateUrl: "./school-collections.component.html",
  styleUrl: "./school-collections.component.css"
})
export class SchoolCollectionsComponent implements OnInit {
  collections: any;

  constructor(readonly collectionsService: CollectionsService) {
  }

  ngOnInit() {
    this.collections = this.collectionsService.getSchoolCollections("hello world");
  }
}
