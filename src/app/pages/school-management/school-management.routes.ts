import { Routes } from "@angular/router";
import { SchoolManagementComponent } from "./school-management.component";
import { schoolResolver } from "../../services/schools.service";

export const SCHOOL_MANAGEMENT_ROUTES: Routes = [
  { path: "", component: SchoolManagementComponent },
  {
    path: ":id",
    loadChildren: () =>
      import("../school-details/school-details.routes").then(
        (m) => m.SCHOOL_MANAGEMENT_ROUTES,
      ),
    resolve: { school: schoolResolver },
  },
];
