export type ZerakiProduct = "Zeraki Analytics" | "Zeraki Finance" | "Zeraki Timetable";
export type SchoolType = "Primary" | "Secondary" | "IGCSE";

export interface School {
  id: number;
  name: string;
  type: SchoolType;
  products: ZerakiProduct[];
  county: string;
}
