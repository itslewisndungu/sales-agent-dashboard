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

export interface Invoice {
  id: number;
  school: {
    id: number;
    name: string;
  };
  amountDue: number;
  dueDate: Date;
  status: string;
}
