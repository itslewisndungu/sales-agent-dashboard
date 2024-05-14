import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import {
  NzButtonComponent,
  NzButtonGroupComponent,
} from "ng-zorro-antd/button";
import {
  NzDropDownDirective,
  NzDropdownMenuComponent,
} from "ng-zorro-antd/dropdown";
import {
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder,
} from "ng-zorro-antd/table";
import { RouterLink } from "@angular/router";
import { NzTagModule } from "ng-zorro-antd/tag";
import { Invoice } from "../../types/types";
import { NzMenuDirective, NzMenuItemComponent } from "ng-zorro-antd/menu";
import { NzIconDirective } from "ng-zorro-antd/icon";

@Component({
  selector: "app-invoice-list",
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgForOf,
    NzButtonComponent,
    NzButtonGroupComponent,
    NzDropDownDirective,
    NzTableModule,
    NzTagModule,
    RouterLink,
    NzDropdownMenuComponent,
    NzMenuDirective,
    NzIconDirective,
    NzMenuItemComponent,
  ],
  templateUrl: "./invoice-list.component.html",
})
export class InvoiceListComponent implements OnChanges {
  @Input() showSchoolName: boolean = false;
  @Input() invoices: Invoice[] = [];
  @Input() loading: boolean = false;

  @Output() updateInvoice = new EventEmitter<Invoice>();
  @Output() deleteInvoice = new EventEmitter<Invoice>();
  @Output() collectInvoicePayment = new EventEmitter<Invoice>();

  defaultSortOrder: NzTableSortOrder = "ascend";

  filteredInvoices: Invoice[] = [];
  statusFilterOptions = [
    { text: "Pending", value: "pending" },
    { text: "Completed", value: "completed" },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["invoices"]) {
      // Sort invoices by due date
      this.filteredInvoices = [...this.invoices].sort((a, b) =>
        this.sortDueDate(a, b, this.defaultSortOrder),
      );
    }
  }

  filterStatus(selectedValues: string[]): void {
    this.filteredInvoices = this.invoices.filter(
      (invoice) =>
        selectedValues.length === 0 || selectedValues.includes(invoice.status),
    );
  }

  collectPayment(invoice: Invoice) {
    this.collectInvoicePayment.emit(invoice);
  }

  handleUpdateInvoice(invoice: Invoice) {
    this.updateInvoice.emit(invoice);
  }

  handleDeleteInvoice(invoice: Invoice) {
    this.deleteInvoice.emit(invoice);
  }

  sortAmountDue(a: Invoice, b: Invoice): number {
    return a.amountDue - b.amountDue;
  }

  sortStatus(a: Invoice, b: Invoice): number {
    return a.status.localeCompare(b.status);
  }

  sortDueDate: NzTableSortFn<Invoice> = (
    a: Invoice,
    b: Invoice,
    sortOrder?: NzTableSortOrder,
  ) => {
    if (!sortOrder) {
      return 0; // No sorting when order is null
    }
    return sortOrder === "ascend"
      ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
  };
}
