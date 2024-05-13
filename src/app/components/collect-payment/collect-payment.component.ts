import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Invoice } from "../../types/types";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { InvoicesService } from "../../services/invoices.service";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzCheckboxComponent } from "ng-zorro-antd/checkbox";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { CommonModule } from "@angular/common";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-collect-payment",
  standalone: true,
  imports: [
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    ReactiveFormsModule,
    NzCheckboxComponent,
    NzButtonComponent,
    CommonModule,
  ],
  templateUrl: "./collect-payment.component.html",
  styleUrl: "./collect-payment.component.css",
})
export class CollectPaymentComponent implements OnInit {
  @Input() isVisible = false;
  @Input() invoice!: Invoice;
  @Output() cancelCollection = new EventEmitter<void>();
  @Output() collectionSuccess = new EventEmitter();

  invoiceForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoicesService,
    private message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      invoiceNumber: [{ value: this.invoice.id, disabled: true }],
      amountDue: [{ value: this.invoice.amountDue, disabled: true }],
      amount: [
        0,
        {
          updateOn: "blur",
          validators: [Validators.required, Validators.min(1)],
        },
      ],
      fullAmount: [false],
    });

    this.invoiceForm.get("fullAmount")?.valueChanges.subscribe((fullAmount) => {
      const amountControl = this.invoiceForm.get("amount");
      if (fullAmount) {
        amountControl?.setValue(this.invoice.amountDue);
        amountControl?.disable();
      } else {
        amountControl?.enable();
      }
    });
  }

  collectPayment() {
    if (this.invoiceForm.invalid) {
      return;
    }

    this.isLoading = true;
    const amountPaid = this.invoiceForm.get("amount")?.value;

    this.invoiceService.collectPayment(this.invoice.id, amountPaid).subscribe({
      next: () => {
        this.isLoading = false;
        this.collectionSuccess.emit();
        this.message.info(
          `Payment of KES ${amountPaid} for invoice ${this.invoice.id} has been collected successfully`,
          {
            nzDuration: 5000,
          },
        );
      },
    });
  }
}
