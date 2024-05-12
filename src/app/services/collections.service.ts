import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CollectionsService {
  constructor() {
  }

  getSchoolCollections(schoolID: string) {
    return this.collections;
  }

  getInvoiceCollections(invoiceNumber: string) {
    return this.collections;
  }

  private collections = [
    {
      schoolName: "Alliance High School",
      invoiceNumber: "INV-001",
      date: "2024-04-15",
      amount: 50000,
      status: "Valid"
    },
    {
      schoolName: "Starehe Boys' Centre and School",
      invoiceNumber: "INV-002",
      date: "2024-03-28",
      amount: 35000,
      status: "Bounced"
    },
    { schoolName: "Kenya High School", invoiceNumber: "INV-003", date: "2024-05-05", amount: 80000, status: "Valid" },
    { schoolName: "Mangu High School", invoiceNumber: "INV-004", date: "2024-02-10", amount: 25000, status: "Valid" },
    { schoolName: "Maseno School", invoiceNumber: "INV-005", date: "2024-04-22", amount: 60000, status: "Partial" },
    {
      schoolName: "Precious Blood Riruta",
      invoiceNumber: "INV-006",
      date: "2024-01-18",
      amount: 42000,
      status: "Valid"
    },
    {
      schoolName: "Moi Girls' High School Eldoret",
      invoiceNumber: "INV-007",
      date: "2024-05-10",
      amount: 75000,
      status: "Pending"
    },
    { schoolName: "Nairobi School", invoiceNumber: "INV-008", date: "2024-03-05", amount: 95000, status: "Valid" },
    { schoolName: "Lenana School", invoiceNumber: "INV-009", date: "2024-04-01", amount: 58000, status: "Bounced" },
    {
      schoolName: "St. Mary's School Nairobi",
      invoiceNumber: "INV-010",
      date: "2024-02-25",
      amount: 120000,
      status: "Valid"
    },
    { schoolName: "The Banda School", invoiceNumber: "INV-011", date: "2023-12-15", amount: 18000, status: "Valid" },
    { schoolName: "Brookhouse School", invoiceNumber: "INV-012", date: "2024-01-22", amount: 78000, status: "Bounced" },
    {
      schoolName: "Greensteds International School",
      invoiceNumber: "INV-013",
      date: "2024-03-10",
      amount: 92000,
      status: "Valid"
    },
    {
      schoolName: "Hillcrest International School",
      invoiceNumber: "INV-014",
      date: "2023-11-30",
      amount: 65000,
      status: "Partial"
    },
    { schoolName: "Peponi School", invoiceNumber: "INV-015", date: "2024-04-08", amount: 32000, status: "Valid" },
    { schoolName: "Braeburn School", invoiceNumber: "INV-016", date: "2023-12-28", amount: 56000, status: "Valid" },
    {
      schoolName: "GEMS Cambridge International School",
      invoiceNumber: "INV-017",
      date: "2024-02-05",
      amount: 88000,
      status: "Pending"
    },
    {
      schoolName: "Riara Group of Schools",
      invoiceNumber: "INV-018",
      date: "2024-05-12",
      amount: 40000,
      status: "Valid"
    },
    {
      schoolName: "St. Christopher's School",
      invoiceNumber: "INV-019",
      date: "2024-01-08",
      amount: 28000,
      status: "Bounced"
    },
    {
      schoolName: "The Aga Khan Academy Mombasa",
      invoiceNumber: "INV-020",
      date: "2023-11-20",
      amount: 115000,
      status: "Valid"
    },
    {
      schoolName: "Alliance High School",
      invoiceNumber: "INV-021",
      date: "2023-10-25",
      amount: 48000,
      status: "Partial"
    },
    {
      schoolName: "Starehe Boys' Centre and School",
      invoiceNumber: "INV-022",
      date: "2024-02-18",
      amount: 30000,
      status: "Valid"
    },
    { schoolName: "Kenya High School", invoiceNumber: "INV-023", date: "2023-12-02", amount: 72000, status: "Valid" },
    { schoolName: "Mangu High School", invoiceNumber: "INV-024", date: "2024-03-15", amount: 22000, status: "Bounced" },
    { schoolName: "Maseno School", invoiceNumber: "INV-025", date: "2023-11-12", amount: 68000, status: "Valid" },
    {
      schoolName: "Precious Blood Riruta",
      invoiceNumber: "INV-026",
      date: "2024-04-28",
      amount: 45000,
      status: "Pending"
    },
    {
      schoolName: "Moi Girls' High School Eldoret",
      invoiceNumber: "INV-027",
      date: "2023-09-30",
      amount: 70000,
      status: "Valid"
    },
    { schoolName: "Nairobi School", invoiceNumber: "INV-028", date: "2024-01-15", amount: 98000, status: "Valid" },
    { schoolName: "Lenana School", invoiceNumber: "INV-029", date: "2024-03-22", amount: 62000, status: "Partial" },
    {
      schoolName: "St. Mary's School Nairobi",
      invoiceNumber: "INV-030",
      date: "2023-10-10",
      amount: 110000,
      status: "Valid"
    }
  ];
}
