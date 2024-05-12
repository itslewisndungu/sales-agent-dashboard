import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/dashboard" },
  { path: "dashboard", loadChildren: () => import("./pages/dashboard/dashboard.routes").then(m => m.DASHBOARD_ROUTES) },
  {
    path: "schools",
    loadChildren: () => import("./pages/school-management/school-management.routes").then(m => m.SCHOOL_MANAGEMENT_ROUTES)
  }
];
