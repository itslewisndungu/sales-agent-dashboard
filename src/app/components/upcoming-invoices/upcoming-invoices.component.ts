import { Component, OnInit } from "@angular/core";
import { NzTableModule } from "ng-zorro-antd/table";
import { CurrencyPipe, NgForOf, NgIf } from "@angular/common";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzBadgeComponent } from "ng-zorro-antd/badge";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { DatePipe } from "../../pipes/date.pipe";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { InvoicesService } from "../../services/invoices.service";
import { Invoice } from "../../types/types";
import { CollectPaymentComponent } from "../collect-payment/collect-payment.component";

@Component({
  selector: "app-upcoming-invoices",
  standalone: true,
  imports: [
    NzTableModule,
    NzModalModule,
    NzFormModule,
    CurrencyPipe,
    NzButtonComponent,
    NgForOf,
    NzBadgeComponent,
    NzTagComponent,
    DatePipe,
    NgIf,
    CollectPaymentComponent,
  ],
  templateUrl: "./upcoming-invoices.component.html",
  styleUrl: "./upcoming-invoices.component.css",
})
export class UpcomingInvoicesComponent implements OnInit {
  upcomingInvoices: Invoice[] = [];

  constructor(private invoiceService: InvoicesService) {}

  invoiceCollectionState: {
    isAddingCollectionToInvoice: boolean;
    isSubmitting: boolean;
    selectedInvoice?: Invoice;
  } = {
    isAddingCollectionToInvoice: false,
    isSubmitting: false,
  };

  handleCollection(invoice: any) {
    this.invoiceCollectionState = {
      ...this.invoiceCollectionState,
      isAddingCollectionToInvoice: true,
      selectedInvoice: invoice,
    };
  }

  ngOnInit(): void {
    this.invoiceService.getLatestInvoices().subscribe((invoices) => {
      this.upcomingInvoices = invoices;
    });
  }
}
