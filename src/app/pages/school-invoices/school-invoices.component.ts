import { Component, OnDestroy, OnInit } from "@angular/core";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import {
  NzButtonComponent,
  NzButtonGroupComponent,
} from "ng-zorro-antd/button";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzTheadComponent,
  NzThMeasureDirective,
  NzTrDirective,
} from "ng-zorro-antd/table";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { InvoicesService } from "../../services/invoices.service";
import { Invoice } from "../../types/types";
import { CollectPaymentComponent } from "../../components/collect-payment/collect-payment.component";
import { Subscription } from "rxjs";
import { CreateInvoiceComponent } from "../../components/create-invoice/create-invoice.component";
import { SchoolsService } from "../../services/schools.service";
import {
  NzDropdownButtonDirective,
  NzDropDownDirective,
  NzDropdownMenuComponent,
} from "ng-zorro-antd/dropdown";
import { NzMenuDirective, NzMenuItemComponent } from "ng-zorro-antd/menu";

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
    CreateInvoiceComponent,
    NzButtonGroupComponent,
    NzDropdownButtonDirective,
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzMenuDirective,
    NzMenuItemComponent,
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

  invoiceUpdateCreateState: {
    status: "idle" | "updating" | "creating";
    selectedSchool?: { name: string; id: number };
    selectedInvoice?: Invoice;
  } = {
    status: "idle",
  };

  constructor(
    readonly invoiceService: InvoicesService,
    readonly schoolService: SchoolsService,
    readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log(
      this.route.parent?.params.subscribe((params) => console.log({ params })),
    );
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
    this.invoiceUpdateCreateState = {
      status: "creating",
      selectedSchool: {
        name: "Githinji Secondary School",
        id: 1,
      },
    };
  }

  closePaymentCollectionModal() {
    this.invoicePaymentCollectionState = {
      isAddingCollectionToInvoice: false,
    };
  }

  closeInvoiceCreationModal() {
    this.invoiceUpdateCreateState = {
      status: "idle",
    };
  }

  handleUpdateInvoice(invoice: Invoice) {
    this.invoiceUpdateCreateState = {
      status: "updating",
      selectedInvoice: invoice,
      selectedSchool: {
        name: "Githinji Secondary School",
        id: 1,
      },
    };
  }

  handleDeleteInvoice() {}

  ngOnDestroy(): void {
    this.invoiceSubscription?.unsubscribe();
  }
}
