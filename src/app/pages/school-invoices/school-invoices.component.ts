import { Component, OnDestroy, OnInit } from "@angular/core";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import { NzButtonComponent } from "ng-zorro-antd/button";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzTheadComponent,
  NzThMeasureDirective,
  NzTrDirective,
} from "ng-zorro-antd/table";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { RouterLink } from "@angular/router";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { InvoicesService } from "../../services/invoices.service";
import { Invoice } from "../../types/types";
import { CollectPaymentComponent } from "../../components/collect-payment/collect-payment.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-school-invoices",
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    DatePipe,
    NgForOf,
    NzButtonComponent,
    NzTableCellDirective,
    NzTableComponent,
    NzTagComponent,
    NzTbodyComponent,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTrDirective,
    NzIconDirective,
    CollectPaymentComponent,
  ],
  templateUrl: "./school-invoices.component.html",
  styleUrl: "./school-invoices.component.css",
})
export class SchoolInvoicesComponent implements OnInit, OnDestroy {
  invoiceSubscription?: Subscription;
  invoices: Invoice[] = [];
  fetchingInvoices = true;

  invoicePaymentCollectionState: // <- This can be in the invoices service but implemented here for simplicity
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

  ngOnInit(): void {
    this.fetchInvoices();
  }

  fetchInvoices() {
    this.fetchingInvoices = true;
    this.invoiceSubscription?.unsubscribe();
    this.invoiceSubscription = this.invoiceService
      .getSchoolInvoices(1)
      .subscribe((invoices) => {
        this.invoices = invoices;
        this.fetchingInvoices = false;
      });
  }

  collectPayment(invoice: any) {
    this.invoicePaymentCollectionState = {
      isAddingCollectionToInvoice: true,
      selectedInvoice: invoice,
    };
  }

  invoiceSchool() {
    console.log("Invoicing school");
  }

  closePaymentCollectionModal() {
    this.invoicePaymentCollectionState = {
      isAddingCollectionToInvoice: false,
    };
  }

  ngOnDestroy(): void {
    this.invoiceSubscription?.unsubscribe();
  }
}
