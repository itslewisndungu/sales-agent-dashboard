import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzMessageService } from "ng-zorro-antd/message";
import { InvoicesService } from "../../services/invoices.service";
import { NzOptionComponent, NzSelectComponent } from "ng-zorro-antd/select";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { NgForOf } from "@angular/common";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalFooterDirective,
} from "ng-zorro-antd/modal";
import { Invoice, InvoiceItem } from "../../types/types";

@Component({
  selector: "app-create-invoice",
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzSelectComponent,
    NzOptionComponent,
    NzIconDirective,
    NgForOf,
    NzModalComponent,
    NzModalContentDirective,
    NzModalFooterDirective,
  ],
  templateUrl: "./create-invoice.component.html",
  styles: [``],
})
export class CreateInvoiceComponent implements OnInit {
  @Input() invoice?: Invoice;
  @Input() school?: { id: number; name: string };
  @Input() isVisible = false;

  @Output() invoiceCreationSuccess = new EventEmitter<void>();
  @Output() invoiceCreationCancelled = new EventEmitter<void>();

  modalTitle = "Create Invoice";
  invoiceForm!: FormGroup;
  isSubmitting = false;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoicesService,
    private message: NzMessageService,
  ) {}

  ngOnInit() {
    this.isEditMode = !!this.invoice;
    this.modalTitle = this.isEditMode ? "Edit Invoice" : "Create Invoice";
    this.createForm();
  }

  createForm() {
    this.invoiceForm = this.fb.group({
      school: [this.school?.name, Validators.required],
      invoiceNumber: [
        this.invoice?.id || this.invoiceService.generateRandomInvoiceNumber(),
      ],
      dueDate: [this.invoice?.dueDate || null, Validators.required],
      items: this.fb.array(this.getInitialItems()),
    });
  }

  submitForm() {
    if (this.invoiceForm.valid) {
      this.isSubmitting = true;
      const invoiceData: Invoice = {
        ...this.invoiceForm.value,
        items: this.invoiceForm.value.items as InvoiceItem[],
      };

      if (this.isEditMode) {
        this.invoiceService
          .updateInvoice(this.invoice!.id, invoiceData)
          .subscribe({
            next: () => this.handleSuccess("Invoice updated successfully!"),
            error: (err) => this.handleError("Failed to update invoice", err),
          });
      } else {
        this.invoiceService.createInvoice(invoiceData).subscribe({
          next: () => this.handleSuccess("Invoice created successfully!"),
          error: (err) => this.handleError("Failed to create invoice", err),
        });
      }
    }
  }

  getInitialItems(): FormGroup[] {
    if (this.invoice && this.invoice.items) {
      return this.invoice.items.map((item) =>
        this.fb.group({
          name: [item.name, Validators.required],
          price: [item.price, [Validators.required, Validators.min(0)]],
        }),
      );
    } else {
      return [this.createItem()]; // Start with one empty item in create mode
    }
  }

  cancel() {
    this.invoiceCreationCancelled.emit();
  }

  get items() {
    return this.invoiceForm.get("items") as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ["Zeraki Analytics", Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  handleSuccess(message: string) {
    this.message.success(message);
    this.invoiceCreationSuccess.emit();
  }

  handleError(message: string, error: any) {
    console.error(message, error);
    this.message.error(message);
    this.isSubmitting = false;
  }
}
