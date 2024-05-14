import { Component, OnInit } from "@angular/core";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { CollectionsService } from "../../services/collections.service";
import { ActivatedRoute } from "@angular/router";
import { Collection } from "../../types/types";

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
    NzDescriptionsModule,
  ],
  templateUrl: "./school-invoice-details.component.html",
  styleUrl: "./school-invoice-details.component.css",
})
export class SchoolInvoiceDetailsComponent implements OnInit {
  collections: Collection[] = [];

  constructor(
    readonly collectionsService: CollectionsService,
    readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    let invoiceId = this.route.snapshot.params["id"];

    this.collectionsService.getInvoiceCollections(invoiceId).subscribe({
      next: (data: any) => {
        this.collections = data;
      },
      error: (error: any) => {
        this.collections = [];
        console.error("Error: ", error);
      },
    });
  }
}
