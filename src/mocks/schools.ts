import { delay, http, HttpResponse } from "msw";
import type { School } from "../app/types/types";

const schools: School[] = [
  {
    id: 1,
    name: "Alliance High School",
    type: "Secondary",
    products: ["Zeraki Analytics", "Zeraki Timetable"],
    county: "Kiambu",
  },
  {
    id: 2,
    name: "Starehe Boys' Centre and School",
    type: "Secondary",
    products: ["Zeraki Finance"],
    county: "Nairobi",
  },
  {
    id: 3,
    name: "Kenya High School",
    type: "Secondary",
    products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
    county: "Nairobi",
  },
  {
    id: 4,
    name: "Mangu High School",
    type: "Secondary",
    products: ["Zeraki Analytics"],
    county: "Kiambu",
  },
  {
    id: 5,
    name: "Maseno School",
    type: "Secondary",
    products: ["Zeraki Timetable"],
    county: "Kisumu",
  },
  {
    id: 6,
    name: "Precious Blood Riruta",
    type: "Secondary",
    products: ["Zeraki Finance"],
    county: "Nairobi",
  },
  {
    id: 7,
    name: "Moi Girls' High School Eldoret",
    type: "Secondary",
    products: ["Zeraki Analytics"],
    county: "Uasin Gishu",
  },
  {
    id: 8,
    name: "Nairobi School",
    type: "Secondary",
    products: ["Zeraki Finance", "Zeraki Timetable"],
    county: "Nairobi",
  },
  {
    id: 9,
    name: "Lenana School",
    type: "Secondary",
    products: ["Zeraki Analytics", "Zeraki Finance"],
    county: "Nairobi",
  },
  {
    id: 10,
    name: "St. Mary's School Nairobi",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
    county: "Nairobi",
  },
  {
    id: 11,
    name: "The Banda School",
    type: "Primary",
    products: ["Zeraki Analytics"],
    county: "Nairobi",
  },
  {
    id: 12,
    name: "Brookhouse School",
    type: "IGCSE",
    products: ["Zeraki Finance"],
    county: "Nairobi",
  },
  {
    id: 13,
    name: "Greensteds International School",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Timetable"],
    county: "Nakuru",
  },
  {
    id: 14,
    name: "Hillcrest International School",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Finance"],
    county: "Nairobi",
  },
  {
    id: 15,
    name: "Peponi School",
    type: "Primary",
    products: ["Zeraki Timetable"],
    county: "Kiambu",
  },
  {
    id: 16,
    name: "Braeburn School",
    type: "IGCSE",
    products: ["Zeraki Analytics"],
    county: "Nairobi",
  },
  {
    id: 17,
    name: "GEMS Cambridge International School",
    type: "IGCSE",
    products: ["Zeraki Finance", "Zeraki Timetable"],
    county: "Nairobi",
  },
  {
    id: 18,
    name: "Riara Group of Schools",
    type: "Primary",
    products: ["Zeraki Analytics", "Zeraki Finance"],
    county: "Nairobi",
  },
  {
    id: 19,
    name: "St. Christopher's School",
    type: "Primary",
    products: ["Zeraki Timetable"],
    county: "Nairobi",
  },
  {
    id: 20,
    name: "The Aga Khan Academy Mombasa",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
    county: "Mombasa",
  },
];

const upcomingInvoices = [
  {
    id: 1,
    school: { id: 1, name: "St. Mary's Primary School" },
    amountDue: 5800,
    dueDate: new Date("2024-05-20"),
    status: "pending",
  },
  {
    id: 2,
    school: { id: 2, name: "Green Hills Academy" },
    amountDue: 12500,
    dueDate: new Date("2024-05-28"),
    status: "pending",
  },
  {
    id: 3,
    school: { id: 3, name: "Brookside Secondary School" },
    amountDue: 8200,
    dueDate: new Date("2024-06-10"),
    status: "pending",
  },
  {
    id: 4,
    school: { id: 4, name: "Nairobi International School" },
    amountDue: 21000,
    dueDate: new Date("2024-06-15"),
    status: "pending",
  },
  {
    id: 5,
    school: { id: 5, name: "Hillcrest Preparatory School" },
    amountDue: 18500,
    dueDate: new Date("2024-06-22"),
    status: "pending",
  },
  {
    id: 6,
    school: { id: 6, name: "Braeburn School" },
    amountDue: 9800,
    dueDate: new Date("2024-07-05"),
    status: "pending",
  },
  {
    id: 7,
    school: { id: 7, name: "Gems Cambridge International School" },
    amountDue: 15600,
    dueDate: new Date("2024-07-12"),
    status: "pending",
  },
  {
    id: 8,
    school: { id: 8, name: "Peponi School" },
    amountDue: 11200,
    dueDate: new Date("2024-07-20"),
    status: "pending",
  },
  {
    id: 9,
    school: { id: 9, name: "Banda School" },
    amountDue: 7400,
    dueDate: new Date("2024-08-01"),
    status: "pending",
  },
  {
    id: 10,
    school: { id: 10, name: "The Aga Khan Academy" },
    amountDue: 23000,
    dueDate: new Date("2024-08-15"),
    status: "pending",
  },
  {
    id: 11,
    school: { id: 11, name: "The Banda School" },
    amountDue: 7400,
    dueDate: new Date("2024-08-01"),
    status: "pending",
  },
  {
    id: 12,
    school: { id: 12, name: "Brookhouse School" },
    amountDue: 15600,
    dueDate: new Date("2024-08-15"),
    status: "pending",
  },
  {
    id: 13,
    school: { id: 13, name: "Greensteds International School" },
    amountDue: 11200,
    dueDate: new Date("2024-08-20"),
    status: "pending",
  },
  {
    id: 14,
    school: { id: 14, name: "Hillcrest International School" },
    amountDue: 9800,
    dueDate: new Date("2024-09-05"),
    status: "pending",
  },
  {
    id: 15,
    school: { id: 15, name: "Peponi School" },
    amountDue: 23000,
    dueDate: new Date("2024-09-15"),
    status: "pending",
  },
  {
    id: 16,
    school: { id: 16, name: "Braeburn School" },
    amountDue: 7400,
    dueDate: new Date("2024-10-01"),
    status: "pending",
  },
  {
    id: 17,
    school: { id: 17, name: "GEMS Cambridge International School" },
    amountDue: 15600,
    dueDate: new Date("2024-10-15"),
    status: "pending",
  },
  {
    id: 18,
    school: { id: 18, name: "Riara Group of Schools" },
    amountDue: 11200,
    dueDate: new Date("2024-11-01"),
    status: "pending",
  },
  {
    id: 19,
    school: { id: 19, name: "St. Christopher's School" },
    amountDue: 9800,
    dueDate: new Date("2024-11-15"),
    status: "pending",
  },
  {
    id: 20,
    school: { id: 20, name: "The Aga Khan Academy Mombasa" },
    amountDue: 23000,
    dueDate: new Date("2024-12-01"),
    status: "pending",
  },
  {
    id: 21,
    school: { id: 1, name: "Alliance High School" },
    amountDue: 7400,
    dueDate: new Date("2024-12-15"),
    status: "pending",
  },
  {
    id: 22,
    school: { id: 2, name: "Starehe Boys' Centre and School" },
    amountDue: 15600,
    dueDate: new Date("2025-01-01"),
    status: "pending",
  },
  {
    id: 23,
    school: { id: 3, name: "Kenya High School" },
    amountDue: 11200,
    dueDate: new Date("2025-01-15"),
    status: "pending",
  },
  {
    id: 24,
    school: { id: 4, name: "Mangu High School" },
    amountDue: 9800,
    dueDate: new Date("2025-02-01"),
    status: "pending",
  },
  {
    id: 25,
    school: { id: 5, name: "Maseno School" },
    amountDue: 23000,
    dueDate: new Date("2025-02-15"),
    status: "pending",
  },
  {
    id: 26,
    school: { id: 6, name: "Precious Blood Riruta" },
    amountDue: 7400,
    dueDate: new Date("2025-03-01"),
    status: "pending",
  },
  {
    id: 27,
    school: { id: 7, name: "Moi Girls' High School Eldoret" },
    amountDue: 15600,
    dueDate: new Date("2025-03-15"),
    status: "pending",
  },
  {
    id: 28,
    school: { id: 8, name: "Nairobi School" },
    amountDue: 11200,
    dueDate: new Date("2025-04-01"),
    status: "pending",
  },
  {
    id: 29,
    school: { id: 9, name: "Lenana School" },
    amountDue: 9800,
    dueDate: new Date("2025-04-15"),
    status: "pending",
  },
  {
    id: 30,
    school: { id: 10, name: "St. Mary's School Nairobi" },
    amountDue: 23000,
    dueDate: new Date("2025-05-01"),
    status: "pending",
  },
];

export const handlers = [
  http.get("http://localhost:3000/schools", () => {
    return HttpResponse.json(schools);
  }),

  http.get("http://localhost:3000/upcoming-invoices", () => {
    return HttpResponse.json(
      upcomingInvoices
        .filter(
          (invoice) =>
            new Date(invoice.dueDate) >= new Date() ||
            invoice.status === "pending",
        )
        .slice(0, 10),
    );
  }),

  http.post("http://localhost:3000/invoices/:invoiceId/collect", async () => {
    await delay(1000);
    return HttpResponse.json({ success: true });
  }),
];
