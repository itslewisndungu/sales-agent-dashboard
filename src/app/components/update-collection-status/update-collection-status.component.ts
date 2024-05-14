import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Collection } from "../../types/types";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzOptionComponent, NzSelectComponent } from "ng-zorro-antd/select";
import { NzInputDirective } from "ng-zorro-antd/input";
import { CollectionsService } from "../../services/collections.service";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-update-collection-status",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzModalModule,
    NzButtonComponent,
    NzTagComponent,
    NzFormModule,
    NzSelectComponent,
    NzOptionComponent,
    NzInputDirective,
  ],
  templateUrl: "./update-collection-status.component.html",
})
export class UpdateCollectionStatusComponent implements OnInit {
  @Input() isVisible = false;
  @Input() collection!: Collection;

  @Output() statusUpdateCancelled = new EventEmitter<void>();
  @Output() statusUpdateSuccessful = new EventEmitter();

  collectionForm!: FormGroup;
  updateCollectionStatus = false;

  constructor(
    readonly fb: FormBuilder,
    readonly collectonService: CollectionsService,
    readonly message: NzMessageService,
  ) {}

  ngOnInit() {
    this.collectionForm = this.fb.group({
      collectionNumber: [this.collection.invoiceNumber, Validators.required],
      amount: [this.collection.amount, Validators.required],
      currentStatus: [this.collection.status, Validators.required],
      newStatus: [this.collection.status, Validators.required],
    });
  }

  submitForm() {
    if (this.collectionForm.valid) {
      this.updateCollectionStatus = true;
      this.collectonService
        .updateCollectionStatus(
          this.collection.id,
          this.collectionForm.value.newStatus,
        )
        .subscribe(() => {
          this.updateCollectionStatus = false;
          this.message.success(
            `Collection status updated successfully from ${this.collectionForm.value.currentStatus} to ${this.collectionForm.value.newStatus}`,
          );
          this.statusUpdateSuccessful.emit();
        });
    }
  }

  handleCancel() {
    this.statusUpdateCancelled.emit();
  }
}
