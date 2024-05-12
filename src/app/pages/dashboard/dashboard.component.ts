import { Component } from "@angular/core";
import { NzStatisticModule } from "ng-zorro-antd/statistic";
import { NzCardModule } from "ng-zorro-antd/card";
import { TargetChartComponent } from "../../components/target-chart/target-chart.component";
import { UpcomingInvoicesComponent } from "../../components/upcoming-invoices/upcoming-invoices.component";
import { SignupOverviewComponent } from "../../components/signup-overview/signup-overview.component";


@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [NzStatisticModule, NzCardModule, TargetChartComponent, UpcomingInvoicesComponent, SignupOverviewComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css"
})
export class DashboardComponent {

}