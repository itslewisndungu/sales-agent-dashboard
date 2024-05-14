import type { Invoice, School } from "../app/types/types";

const mockCollections = [
  {
    schoolName: "Alliance High School",
    invoiceNumber: "INV-001",
    date: "2024-04-15",
    amount: 50000,
    status: "valid"
  },
  {
    schoolName: "Starehe Boys' Centre and School",
    invoiceNumber: "INV-002",
    date: "2024-03-28",
    amount: 35000,
    status: "bounced"
  },
  { schoolName: "Kenya High School", invoiceNumber: "INV-003", date: "2024-05-05", amount: 80000, status: "valid" },
  { schoolName: "Mangu High School", invoiceNumber: "INV-004", date: "2024-02-10", amount: 25000, status: "valid" },
  { schoolName: "Maseno School", invoiceNumber: "INV-005", date: "2024-04-22", amount: 60000, status: "Partial" },
  {
    schoolName: "Precious Blood Riruta",
    invoiceNumber: "INV-006",
    date: "2024-01-18",
    amount: 42000,
    status: "valid"
  },
  {
    schoolName: "Moi Girls' High School Eldoret",
    invoiceNumber: "INV-007",
    date: "2024-05-10",
    amount: 75000,
    status: "valid"
  },
  { schoolName: "Nairobi School", invoiceNumber: "INV-008", date: "2024-03-05", amount: 95000, status: "valid" },
  { schoolName: "Lenana School", invoiceNumber: "INV-009", date: "2024-04-01", amount: 58000, status: "bounced" },
  {
    schoolName: "St. Mary's School Nairobi",
    invoiceNumber: "INV-010",
    date: "2024-02-25",
    amount: 120000,
    status: "valid"
  },
  { schoolName: "The Banda School", invoiceNumber: "INV-011", date: "2023-12-15", amount: 18000, status: "valid" },
  { schoolName: "Brookhouse School", invoiceNumber: "INV-012", date: "2024-01-22", amount: 78000, status: "bounced" },
  {
    schoolName: "Greensteds International School",
    invoiceNumber: "INV-013",
    date: "2024-03-10",
    amount: 92000,
    status: "valid"
  },
  {
    schoolName: "Hillcrest International School",
    invoiceNumber: "INV-014",
    date: "2023-11-30",
    amount: 65000,
    status: "valid"
  },
  { schoolName: "Peponi School", invoiceNumber: "INV-015", date: "2024-04-08", amount: 32000, status: "valid" },
  { schoolName: "Braeburn School", invoiceNumber: "INV-016", date: "2023-12-28", amount: 56000, status: "valid" },
  {
    schoolName: "GEMS Cambridge International School",
    invoiceNumber: "INV-017",
    date: "2024-02-05",
    amount: 88000,
    status: "valid"
  },
  {
    schoolName: "Riara Group of Schools",
    invoiceNumber: "INV-018",
    date: "2024-05-12",
    amount: 40000,
    status: "valid"
  },
  {
    schoolName: "St. Christopher's School",
    invoiceNumber: "INV-019",
    date: "2024-01-08",
    amount: 28000,
    status: "bounced"
  },
  {
    schoolName: "The Aga Khan Academy Mombasa",
    invoiceNumber: "INV-020",
    date: "2023-11-20",
    amount: 115000,
    status: "valid"
  },
  {
    schoolName: "Alliance High School",
    invoiceNumber: "INV-021",
    date: "2023-10-25",
    amount: 48000,
    status: "valid"
  },
  {
    schoolName: "Starehe Boys' Centre and School",
    invoiceNumber: "INV-022",
    date: "2024-02-18",
    amount: 30000,
    status: "valid"
  },
  { schoolName: "Kenya High School", invoiceNumber: "INV-023", date: "2023-12-02", amount: 72000, status: "valid" },
  { schoolName: "Mangu High School", invoiceNumber: "INV-024", date: "2024-03-15", amount: 22000, status: "bounced" },
  { schoolName: "Maseno School", invoiceNumber: "INV-025", date: "2023-11-12", amount: 68000, status: "valid" },
  {
    schoolName: "Precious Blood Riruta",
    invoiceNumber: "INV-026",
    date: "2024-04-28",
    amount: 45000,
    status: "valid"
  },
  {
    schoolName: "Moi Girls' High School Eldoret",
    invoiceNumber: "INV-027",
    date: "2023-09-30",
    amount: 70000,
    status: "valid"
  },
  { schoolName: "Nairobi School", invoiceNumber: "INV-028", date: "2024-01-15", amount: 98000, status: "valid" },
  { schoolName: "Lenana School", invoiceNumber: "INV-029", date: "2024-03-22", amount: 62000, status: "bounced" },
  {
    schoolName: "St. Mary's School Nairobi",
    invoiceNumber: "INV-030",
    date: "2023-10-10",
    amount: 110000,
    status: "valid"
  }
];

export const mockCollectionsWithIds = mockCollections.map((collection, index) => ({
  ...collection,
  id: index + 1,
}));

export const mockSchools: School[] = [
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

export const mockUpcomingInvoices: Invoice[] = [
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



