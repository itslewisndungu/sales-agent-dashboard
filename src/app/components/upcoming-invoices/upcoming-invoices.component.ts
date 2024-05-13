import { Component, OnDestroy, OnInit } from "@angular/core";
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
import { Subscription } from "rxjs";

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
export class UpcomingInvoicesComponent implements OnInit, OnDestroy {
  upcomingInvoices: Invoice[] = [];
  fetchInvoicesSubscription?: Subscription;

  invoicePaymentCollectionState:
    | {
        isAddingCollectionToInvoice: false;
      }
    | {
        isAddingCollectionToInvoice: true;
        selectedInvoice: Invoice;
      } = {
    isAddingCollectionToInvoice: false,
  };

  constructor(readonly invoiceService: InvoicesService) {}

  handleCollection(invoice: any) {
    this.invoicePaymentCollectionState = {
      isAddingCollectionToInvoice: true,
      selectedInvoice: invoice,
    };
  }

  ngOnInit(): void {
    this.fetchUpcomingInvoices()
  }

  fetchUpcomingInvoices() {
    this.fetchInvoicesSubscription = this.invoiceService
      .getLatestInvoices()
      .subscribe((invoices) => {
        this.upcomingInvoices = invoices;
      });
  }

  closeCollectionModal() {
    this.invoicePaymentCollectionState = { isAddingCollectionToInvoice: false }
  }

  ngOnDestroy() {
    this.fetchInvoicesSubscription?.unsubscribe();
  }
}
