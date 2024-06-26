export type ZerakiProduct =
  | "Zeraki Analytics"
  | "Zeraki Finance"
  | "Zeraki Timetable";

export type SchoolType = "Primary" | "Secondary" | "IGCSE";

export interface School {
  id: number;
  name: string;
  type: SchoolType;
  products: ZerakiProduct[];
  county: string;
  balance: number;
  paymentDueDate: Date;
  registrationDate: Date;
}

export interface MainStatistics {
  totalCollectionsMade: number;
  newSchoolsSignedUp: number;
  totalRevenueByProduct: number;
  numberOfBouncedCheques: number;
}

export interface SignupTargetStatistics {
  totalSignups: number;
  target: number;
}

export interface SignupTargetStatisticsByProduct {
  analytics: SignupTargetStatistics;
  timetable: SignupTargetStatistics;
  finance: SignupTargetStatistics;
}

export interface SignupDistribution {
  primary: number;
  secondary: number;
  igcse: number;
}

export interface SignupDistributionByProduct {
  analytics: SignupDistribution;
  timetable: SignupDistribution;
  finance: SignupDistribution;
}

export interface InvoiceItem {
  name: string;
  price: number;
}

export interface Invoice {
  id: number;
  school: {
    id: number;
    name: string;
  };
  amountDue: number;
  dueDate: Date;
  status: string;
  items: InvoiceItem[];
}

export interface Collection {
  id: number;
  schoolName: string;
  invoiceNumber: string;
  date: string;
  amount: number;
  status: "bounced" | "valid";
}
