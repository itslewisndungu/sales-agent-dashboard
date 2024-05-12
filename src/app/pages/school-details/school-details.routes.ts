import { Routes } from "@angular/router";
import { SchoolDetailsComponent } from "./school-details.component";
import { SchoolPrimaryInfoComponent } from "../school-primary-info/school-primary-info.component";
import { SchoolInvoicesComponent } from "../school-invoices/school-invoices.component";
import { SchoolCollectionsComponent } from "../school-collections/school-collections.component";
import { SchoolInvoiceDetailsComponent } from "../school-invoice-details/school-invoice-details.component";

export const SCHOOL_MANAGEMENT_ROUTES: Routes = [
  {
    path: "",
    component: SchoolDetailsComponent,
    children: [
      {
        path: "",
        component: SchoolPrimaryInfoComponent
      },
      {
        path: "invoices",
        component: SchoolInvoicesComponent
      },
      {
        path: "invoices/:id",
        component: SchoolInvoiceDetailsComponent
      },
      {
        path: "collections",
        component: SchoolCollectionsComponent
      }
    ]
  }
];
