import { http, HttpResponse } from "msw";
import type { School } from "../app/types/school";

const schools: School[] = [
  {
    id: 1,
    name: "Alliance High School",
    type: "Secondary",
    products: ["Zeraki Analytics", "Zeraki Timetable"],
    county: "Kiambu"
  },
  {
    id: 2,
    name: "Starehe Boys' Centre and School", type: "Secondary", products: ["Zeraki Finance"], county: "Nairobi"
  },
  {
    id: 3,
    name: "Kenya High School",
    type: "Secondary",
    products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
    county: "Nairobi"
  },
  {
    id: 4,
    name: "Mangu High School", type: "Secondary", products: ["Zeraki Analytics"], county: "Kiambu"
  },
  {
    id: 5,
    name: "Maseno School", type: "Secondary", products: ["Zeraki Timetable"], county: "Kisumu"
  },
  {
    id: 6,
    name: "Precious Blood Riruta", type: "Secondary", products: ["Zeraki Finance"], county: "Nairobi"
  },
  {
    id: 7,
    name: "Moi Girls' High School Eldoret", type: "Secondary", products: ["Zeraki Analytics"], county: "Uasin Gishu"
  },
  {
    id: 8,
    name: "Nairobi School", type: "Secondary", products: ["Zeraki Finance", "Zeraki Timetable"], county: "Nairobi"
  },
  {
    id: 9,
    name: "Lenana School", type: "Secondary", products: ["Zeraki Analytics", "Zeraki Finance"], county: "Nairobi"
  },
  {
    id: 10,
    name: "St. Mary's School Nairobi",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
    county: "Nairobi"
  },
  {
    id: 11,
    name: "The Banda School", type: "Primary", products: ["Zeraki Analytics"], county: "Nairobi"
  },
  {
    id: 12,
    name: "Brookhouse School", type: "IGCSE", products: ["Zeraki Finance"], county: "Nairobi"
  },
  {
    id: 13,
    name: "Greensteds International School",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Timetable"],
    county: "Nakuru"
  },
  {
    id: 14,
    name: "Hillcrest International School",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Finance"],
    county: "Nairobi"
  },
  {
    id: 15,
    name: "Peponi School", type: "Primary", products: ["Zeraki Timetable"], county: "Kiambu"
  },
  {
    id: 16,
    name: "Braeburn School", type: "IGCSE", products: ["Zeraki Analytics"], county: "Nairobi"
  },
  {
    id: 17,
    name: "GEMS Cambridge International School",
    type: "IGCSE",
    products: ["Zeraki Finance", "Zeraki Timetable"],
    county: "Nairobi"
  },
  {
    id: 18,
    name: "Riara Group of Schools",
    type: "Primary",
    products: ["Zeraki Analytics", "Zeraki Finance"],
    county: "Nairobi"
  },
  {
    id: 19,
    name: "St. Christopher's School", type: "Primary", products: ["Zeraki Timetable"], county: "Nairobi"
  },
  {
    id: 20,
    name: "The Aga Khan Academy Mombasa",
    type: "IGCSE",
    products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
    county: "Mombasa"
  }
];

export const handlers = [
  http.get("/schools", () => {
    return HttpResponse.json(schools);
  })
];
