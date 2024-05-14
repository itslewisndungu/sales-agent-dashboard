import { Component, OnDestroy, OnInit } from "@angular/core";
import { NzTableModule } from "ng-zorro-antd/table";
import { CurrencyPipe, NgForOf, NgIf } from "@angular/common";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzBadgeComponent } from "ng-zorro-antd/badge";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { DatePipe } from "../../pipes/date.pipe";
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { InvoicesService } from "../../services/invoices.service";
import { Invoice } from "../../types/types";
import { CollectPaymentComponent } from "../collect-payment/collect-payment.component";
import { Subscription } from "rxjs";
import { InvoiceListComponent } from "../invoice-list/invoice-list.component";
import { SchoolsService } from "../../services/schools.service";
import { ActivatedRoute } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { CreateInvoiceComponent } from "../create-invoice/create-invoice.component";

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
    InvoiceListComponent,
    CreateInvoiceComponent,
  ],
  templateUrl: "./upcoming-invoices.component.html",
  styleUrl: "./upcoming-invoices.component.css",
})
export class UpcomingInvoicesComponent implements OnInit, OnDestroy {
  upcomingInvoices: Invoice[] = [];
  fetchingUpcomingInvoices = false;
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
    readonly modal: NzModalService,
    readonly message: NzMessageService,
  ) {}

  handleCollection(invoice: Invoice) {
    this.invoicePaymentCollectionState = {
      isAddingCollectionToInvoice: true,
      selectedInvoice: invoice,
    };
  }

  ngOnInit(): void {
    this.fetchUpcomingInvoices();
  }

  fetchUpcomingInvoices() {
    this.fetchingUpcomingInvoices = true;
    this.fetchInvoicesSubscription = this.invoiceService
      .getLatestInvoices()
      .subscribe((invoices) => {
        this.upcomingInvoices = invoices;
        this.fetchingUpcomingInvoices = false;
      });
  }

  closeCollectionModal() {
    this.invoicePaymentCollectionState = { isAddingCollectionToInvoice: false };
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

  closeInvoiceCreationModal() {
    this.invoiceUpdateCreateState = {
      status: "idle",
    };
  }

  handleDeleteInvoice(invoice: Invoice) {
    this.modal.confirm({
      nzTitle: "Are you sure delete this invoice?",
      nzContent: `<p class="text-gray-600""> This action will delete the invoice and is irreversible. Deleting this invoice will remove it from the system. </p>`,
      nzOkText: "Delete Invoice",
      nzOkType: "primary",
      nzOkDanger: true,
      nzOnOk: () => {
        let ref = this.message.loading("Deleting invoice...", {
          nzDuration: 0,
        }).messageId;

        this.invoiceService.deleteInvoice(invoice.id).subscribe({
          next: () => {
            this.message.remove(ref);
            this.message.success("Invoice deleted successfully");
            this.fetchUpcomingInvoices();
          },
          error: () => {
            this.modal.error({
              nzTitle: "An error occurred",
              nzContent:
                "An error occurred while deleting the invoice. Please try again.",
            });
          },
        });
      },
      nzCancelText: "Cancel",
    });
  }

  ngOnDestroy() {
    this.fetchInvoicesSubscription?.unsubscribe();
  }
}
