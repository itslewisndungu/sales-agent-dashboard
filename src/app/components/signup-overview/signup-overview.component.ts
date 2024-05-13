import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from "@angular/core";
import Chart from "chart.js/auto";
import { NzCardComponent } from "ng-zorro-antd/card";
import { SignupDistributionByProduct } from "../../types/types";

@Component({
  selector: "app-signup-overview",
  standalone: true,
  imports: [
    NzCardComponent
  ],
  templateUrl: "./signup-overview.component.html",
  styleUrl: "./signup-overview.component.css"
})
export class SignupOverviewComponent implements AfterViewInit, OnDestroy {
  @Input()
  signupsDistribution!: SignupDistributionByProduct;

  public signupsOverviewChart?: Chart<"bar", number[]>;

  @ViewChild("signupOverviewCanvas")
  signupOverviewChartEl?: ElementRef<HTMLCanvasElement>;

  // Using ngAfterViewInit lifecycle hook to ensure the canvas element
  // is available before creating the chart
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    if (this.signupOverviewChartEl) {
      this.signupsOverviewChart = new Chart(this.signupOverviewChartEl.nativeElement, {
        type: "bar",
        data: this.getChartData(),
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: false // Ensure bars are grouped, not stacked
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  getChartData() {
    const { analytics, timetable, finance } = this.signupsDistribution;

    return {
      labels: ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"],
      datasets: [
        {
          label: "Primary Schools",
          data: [analytics.primary, finance.primary, timetable.primary],
          backgroundColor: "rgba(255, 99, 132, 1)"
        },
        {
          label: "Secondary Schools",
          data: [analytics.secondary, finance.secondary, timetable.secondary],
          backgroundColor: "rgba(54, 162, 235, 1)"
        },
        {
          label: "IGCSE",
          data: [analytics.igcse, finance.igcse, timetable.igcse],
          backgroundColor: "rgba(255, 205, 86, 1)"
        }
      ]
    };
  }

  ngOnDestroy() {
    this.signupsOverviewChart?.destroy();
  }
}

