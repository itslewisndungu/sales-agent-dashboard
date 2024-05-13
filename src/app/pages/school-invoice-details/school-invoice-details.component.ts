import { Component, OnInit } from "@angular/core";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { CollectionsService } from "../../services/collections.service";

@Component({
  selector: "app-school-invoice-details",
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgForOf,
    NzButtonComponent,
    NzTableModule,
    NzTagComponent,
    NzDescriptionsModule
  ],
  templateUrl: "./school-invoice-details.component.html",
  styleUrl: "./school-invoice-details.component.css"
})
export class SchoolInvoiceDetailsComponent implements OnInit {
  collections: any;

  constructor(readonly collectionsService: CollectionsService) {
  }

  ngOnInit() {
    this.collections = this.collectionsService.getInvoiceCollections(1);
  }
}
