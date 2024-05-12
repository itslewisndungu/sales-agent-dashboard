import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  constructor() { }

  getAllSchoolsList() {
    return this.kenyanSchools;
  }

  kenyanSchools = [
    {
      name: "Alliance High School",
      type: "Secondary",
      products: ["Zeraki Analytics", "Zeraki Timetable"],
      county: "Kiambu"
    },
    { name: "Starehe Boys' Centre and School", type: "Secondary", products: ["Zeraki Finance"], county: "Nairobi" },
    {
      name: "Kenya High School",
      type: "Secondary",
      products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
      county: "Nairobi"
    },
    { name: "Mangu High School", type: "Secondary", products: ["Zeraki Analytics"], county: "Kiambu" },
    { name: "Maseno School", type: "Secondary", products: ["Zeraki Timetable"], county: "Kisumu" },
    { name: "Precious Blood Riruta", type: "Secondary", products: ["Zeraki Finance"], county: "Nairobi" },
    { name: "Moi Girls' High School Eldoret", type: "Secondary", products: ["Zeraki Analytics"], county: "Uasin Gishu" },
    { name: "Nairobi School", type: "Secondary", products: ["Zeraki Finance", "Zeraki Timetable"], county: "Nairobi" },
    { name: "Lenana School", type: "Secondary", products: ["Zeraki Analytics", "Zeraki Finance"], county: "Nairobi" },
    {
      name: "St. Mary's School Nairobi",
      type: "IGCSE",
      products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
      county: "Nairobi"
    },
    { name: "The Banda School", type: "Primary", products: ["Zeraki Analytics"], county: "Nairobi" },
    { name: "Brookhouse School", type: "IGCSE", products: ["Zeraki Finance"], county: "Nairobi" },
    {
      name: "Greensteds International School",
      type: "IGCSE",
      products: ["Zeraki Analytics", "Zeraki Timetable"],
      county: "Nakuru"
    },
    {
      name: "Hillcrest International School",
      type: "IGCSE",
      products: ["Zeraki Analytics", "Zeraki Finance"],
      county: "Nairobi"
    },
    { name: "Peponi School", type: "Primary", products: ["Zeraki Timetable"], county: "Kiambu" },
    { name: "Braeburn School", type: "IGCSE", products: ["Zeraki Analytics"], county: "Nairobi" },
    {
      name: "GEMS Cambridge International School",
      type: "IGCSE",
      products: ["Zeraki Finance", "Zeraki Timetable"],
      county: "Nairobi"
    },
    {
      name: "Riara Group of Schools",
      type: "Primary",
      products: ["Zeraki Analytics", "Zeraki Finance"],
      county: "Nairobi"
    },
    { name: "St. Christopher's School", type: "Primary", products: ["Zeraki Timetable"], county: "Nairobi" },
    {
      name: "The Aga Khan Academy Mombasa",
      type: "IGCSE",
      products: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
      county: "Mombasa"
    }
  ];
}
