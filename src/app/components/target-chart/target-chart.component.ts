import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from "@angular/core";
import Chart from "chart.js/auto";
import { NzCardModule } from "ng-zorro-antd/card";
import { SignupTargetStatistics, SignupTargetStatisticsByProduct } from "../../types/types";

@Component({
  selector: "app-target-chart",
  standalone: true,
  imports: [NzCardModule],
  templateUrl: "./target-chart.component.html",
  styleUrl: "./target-chart.component.css"
})
export class TargetChartComponent implements AfterViewInit, OnDestroy {
  @Input()
  targets!: SignupTargetStatisticsByProduct;

  public analyticsChart?: Chart<"pie", number[]>;
  public timetableChart?: Chart<"pie", number[]>;
  public financeChart?: Chart<"pie", number[]>;

  @ViewChild("analyticsChartCanvas")
  analyticsChartEl?: ElementRef<HTMLCanvasElement>;

  @ViewChild("timetableChartCanvas")
  timetableChartEl?: ElementRef<HTMLCanvasElement>;

  @ViewChild("financeChartCanvas")
  financeChartEl?: ElementRef<HTMLCanvasElement>;

  // todo: replace with actual data from a service
  analyticsData = {
    labels: [
      "Target Achieved",
      "Remaining Target"
    ],
    datasets: [{
      label: "My First Dataset",
      data: [60, 40], // Replace with actual data
      backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)"
      ],
      hoverOffset: 4
    }]
  };

  ngAfterViewInit(): void {
    this.createCharts();
  };

  createCharts() {
    if (this.analyticsChartEl && this.timetableChartEl && this.financeChartEl) {
      this.analyticsChart = this.createPieChart(
        this.analyticsChartEl.nativeElement,
        this.getPieChartData(this.targets.analytics, "Analytics")
      );

      this.timetableChart = this.createPieChart(
        this.timetableChartEl.nativeElement,
        this.getPieChartData(this.targets.timetable, "Timetable")
      );

      this.financeChart = this.createPieChart(
        this.financeChartEl.nativeElement,
        this.getPieChartData(this.targets.finance, "Finance")
      );
    }
  }

  // Helper to create common pie charts
  createPieChart(element: HTMLCanvasElement, data: any) {
    return new Chart(element, {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          // Customizing the tooltip to show the actual number of signups
          tooltip: {
            callbacks: {
              label: function(context: any) {
                let label = context.label || "";
                if (context.parsed !== null) {
                  label += `: ${context.parsed} signups`;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }

  getPieChartData(data: SignupTargetStatistics, label: string) {
    return {
      labels: [
        "Target Achieved",
        "Remaining Target"
      ],
      datasets: [{
        label: label,
        data: [data.totalSignups, data.target - data.totalSignups],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)"
        ],
        hoverOffset: 4
      }]
    };
  }

  ngOnDestroy() {
    this.analyticsChart?.destroy();
    this.timetableChart?.destroy();
    this.financeChart?.destroy();
  }
}
