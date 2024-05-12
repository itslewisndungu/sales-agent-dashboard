import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import Chart from "chart.js/auto";
import { NzCardModule } from "ng-zorro-antd/card";

@Component({
  selector: "app-target-chart",
  standalone: true,
  imports: [NzCardModule],
  templateUrl: "./target-chart.component.html",
  styleUrl: "./target-chart.component.css"
})
export class TargetChartComponent implements AfterViewInit, OnDestroy {
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

  // Helper to create common pie charts
  getPieChart(element: HTMLCanvasElement, data: any) {
    return new Chart(element, {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          // Display percentage of the targets in the tooltips
          tooltip: {
            callbacks: {
              label: function(context: any) {
                let label = context.label || "";
                if (context.parsed !== null) {
                  label += ": " + context.parsed + "%";
                }
                return label;
              }
            }
          }
        }
      }
    });
  }

  createCharts() {
    if (this.analyticsChartEl && this.timetableChartEl && this.financeChartEl) {
      this.analyticsChart = this.getPieChart(this.analyticsChartEl.nativeElement, this.analyticsData);
      this.timetableChart = this.getPieChart(this.timetableChartEl.nativeElement, this.analyticsData);
      this.financeChart = this.getPieChart(this.financeChartEl.nativeElement, this.analyticsData);
    }
  }

  ngOnDestroy() {
    this.analyticsChart?.destroy();
    this.timetableChart?.destroy();
    this.financeChart?.destroy();
  }
}
