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
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzTableCellDirective, NzTableModule } from "ng-zorro-antd/table";
import { Collection } from "../../types/types";
import { NzTagComponent } from "ng-zorro-antd/tag";

@Component({
  selector: "app-collections-list",
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgForOf,
    NzButtonComponent,
    NzTableCellDirective,
    NzTableModule,
    NzTagComponent,
  ],
  templateUrl: "./collections-list.component.html",
})
export class CollectionsListComponent implements OnChanges {
  @Input() collections: Collection[] = [];
  @Input() loading: boolean = false;
  @Output() updateCollectionStatus = new EventEmitter<Collection>();

  filteredCollections: Collection[] = []; // Filtered data for the table
  statusFilterOptions = [
    { text: "Valid", value: "valid" },
    { text: "Bounced", value: "bounced" },
  ];

  _updateCollectionStatus(collection: Collection) {
    this.updateCollectionStatus.emit(collection);
  }

  // Initialize filtered data when the input data changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["collections"]) {
      this.filteredCollections = this.collections;
    }
  }

  filterStatus(selectedValues: string[]): void {
    this.filteredCollections = this.collections.filter(
      (collection) =>
        selectedValues.length === 0 ||
        selectedValues.includes(collection.status),
    );
  }

  sortInvoiceNumber(a: Collection, b: Collection): number {
    return a.invoiceNumber.localeCompare(b.invoiceNumber); // Sort alphabetically
  }

  sortStatus(a: Collection, b: Collection): number {
    return a.status.localeCompare(b.status); // Sort alphabetically
  }

  sortCollectionDate(a: Collection, b: Collection): number {
    return new Date(a.date).getTime() - new Date(b.date).getTime(); // Sort by date
  }

  sortPaymentAmount(a: Collection, b: Collection): number {
    return a.amount - b.amount; // Sort by amount
  }
}
