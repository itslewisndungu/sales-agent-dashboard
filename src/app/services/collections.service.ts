import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Collection } from "../types/types";

@Injectable({
  providedIn: "root",
})
export class CollectionsService {
  constructor(readonly http: HttpClient) {}

  getSchoolCollections(schoolID: number) {
    return this.http.get<Collection[]>(
      `http://localhost:3000/schools/${schoolID}/collections`,
    );
  }

  getInvoiceCollections(invoiceNumber: number) {
    return this.http.get<Collection[]>(
      `http://localhost:3000/invoices/${invoiceNumber}/collections`,
    );
  }

  updateCollectionStatus(collectionID: any, newStatus: "valid" | "bounced") {
    return this.http.patch(
      `http://localhost:3000/collections/${collectionID}`,
      { status: newStatus },
    );
  }
}
