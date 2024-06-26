import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Invoice } from "../types/types";

@Injectable({
  providedIn: "root"
})
export class InvoicesService {
  constructor(readonly http: HttpClient) {
  }

  getLatestInvoices() {
    return this.http.get<Invoice[]>("http://localhost:3000/upcoming-invoices");
  }

  getSchoolInvoices(schoolID: number) {
    return this.http.get<Invoice[]>(
      `http://localhost:3000/schools/${schoolID}/invoices`
    );
  }

  createInvoice(invoice: Invoice) {
    return this.http.post("http://localhost:3000/invoices", invoice);
  }

  updateInvoice(invoiceId: number, invoiceData: Partial<Invoice>) {
    return this.http.patch(`http://localhost:3000/invoices/${invoiceId}`, invoiceData);
  }

  collectPayment(invoiceId: number, amountPaid: any) {
    console.log(
      "Collecting payment for invoice",
      invoiceId,
      "Amount paid:",
      amountPaid
    );

    return this.http.post(
      `http://localhost:3000/invoices/${invoiceId}/collect`,
      {
        amountPaid
      }
    );
  }

  generateRandomInvoiceNumber() {
    return Math.floor(Math.random() * 10000);
  }

  deleteInvoice(id: number) {
    return this.http.delete(`http://localhost:3000/invoices/${id}`);
  }
}
