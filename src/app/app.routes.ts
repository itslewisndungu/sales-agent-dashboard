import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/dashboard" },
  { path: "welcome", loadChildren: () => import("./pages/welcome/welcome.routes").then(m => m.WELCOME_ROUTES) },
  { path: "dashboard", loadChildren: () => import("./pages/dashboard/dashboard.routes").then(m => m.DASHBOARD_ROUTES) },
  {
    path: "school-management",
    loadChildren: () => import("./pages/school-management/school-management.routes").then(m => m.SCHOOL_MANAGEMENT_ROUTES)
  }
];
