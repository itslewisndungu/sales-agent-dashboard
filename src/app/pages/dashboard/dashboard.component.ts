import { Component, OnInit } from "@angular/core";
import { NzStatisticModule } from "ng-zorro-antd/statistic";
import { NzCardModule } from "ng-zorro-antd/card";
import { TargetChartComponent } from "../../components/target-chart/target-chart.component";
import { UpcomingInvoicesComponent } from "../../components/upcoming-invoices/upcoming-invoices.component";
import { SignupOverviewComponent } from "../../components/signup-overview/signup-overview.component";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { DashboardService } from "../../services/dashboard.service";
import { MainStatistics, SignupDistributionByProduct, SignupTargetStatisticsByProduct } from "../../types/types";
import { NzSkeletonComponent } from "ng-zorro-antd/skeleton";
import { NzModalComponent } from "ng-zorro-antd/modal";


@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [NzStatisticModule, NzCardModule, TargetChartComponent, UpcomingInvoicesComponent, SignupOverviewComponent, CurrencyPipe, DecimalPipe, NzSkeletonComponent, NzModalComponent],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  isAddingCollectionToInvoice = false;

  statistics?: MainStatistics;
  signupTargetStatistics?: SignupTargetStatisticsByProduct;
  signupDistributionAcrossSchoolTypes?: SignupDistributionByProduct;

  constructor(readonly dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.statistics = this.dashboardService.getMainStatistics();
    this.signupTargetStatistics = this.dashboardService.getSignupTargetStatistics();
    this.signupDistributionAcrossSchoolTypes = this.dashboardService.getSignupDistributionAcrossSchoolTypes();
  }

  openAddCollectionModal() {
    this.isAddingCollectionToInvoice = true;
  }
}
