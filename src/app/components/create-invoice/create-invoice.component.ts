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
  @Input() school?: { id: number; name: string };
  @Input() isVisible = false;

  @Output() invoiceCreationSuccess = new EventEmitter<void>();
  @Output() invoiceCreationCancelled = new EventEmitter<void>();

  invoiceForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoicesService,
    private message: NzMessageService,
  ) {}

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      school: [this.school?.name, Validators.required],
      invoiceNumber: [
        this.invoiceService.generateRandomInvoiceNumber(),
        Validators.required,
      ],
      dueDate: [null, Validators.required],
      items: this.fb.array([this.createItem()]),
    });
  }

  submitForm() {
    if (this.invoiceForm.valid) {
      this.isSubmitting = true;
      this.invoiceService.createInvoice(this.invoiceForm.value).subscribe({
        next: () => {
          this.message.success("Invoice created successfully!");
          this.invoiceCreationSuccess.emit();
        },
        error: (err) => {
          console.error("Error creating invoice:", err);
          this.message.error("Failed to create invoice");
          this.isSubmitting = false;
        },
      });
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
}
