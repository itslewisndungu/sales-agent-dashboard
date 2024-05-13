import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Invoice } from "../types/types";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InvoicesService {
  constructor(readonly http: HttpClient) {}

  getLatestInvoices() {
    return this.http.get<Invoice[]>("http://localhost:3000/upcoming-invoices");
  }

  getSchoolInvoices(schoolID: number) {
    return this.http.get<Invoice[]>(
      `http://localhost:3000/schools/${schoolID}/invoices`,
    );
  }

  collectPayment(invoiceId: number, amountPaid: any) {
    console.log(
      "Collecting payment for invoice",
      invoiceId,
      "Amount paid:",
      amountPaid,
    );

    return this.http.post(
      `http://localhost:3000/invoices/${invoiceId}/collect`,
      {
        amountPaid,
      },
    );
  }
}
