import { Component, ElementRef, ViewChild } from "@angular/core";
import Chart from "chart.js/auto";
import { NzCardComponent } from "ng-zorro-antd/card";

@Component({
  selector: "app-signup-overview",
  standalone: true,
  imports: [
    NzCardComponent
  ],
  templateUrl: "./signup-overview.component.html",
  styleUrl: "./signup-overview.component.css"
})
export class SignupOverviewComponent {
  public signupsOverviewChart?: Chart<"bar", number[]>;

  @ViewChild("signupOverviewCanvas")
  signupOverviewChartEl?: ElementRef<HTMLCanvasElement>;

  // todo: replace with actual data from a service
  signupOverviewData = {
    labels: ["Primary Schools", "Secondary Schools", "IGCSE"],
    datasets: [
      {
        label: "Zeraki Analytics",
        data: [120, 85, 98],
        backgroundColor: "rgba(255, 99, 132, 1)"
      },
      {
        label: "Zeraki Finance",
        data: [75, 110, 62],
        backgroundColor: "rgba(54, 162, 235, 1)"
      },
      {
        label: "Zeraki Timetable",
        data: [92, 78, 105],
        backgroundColor: "rgba(255, 205, 86, 1)"
      }
    ]
  };

  // Using ngAfterViewInit lifecycle hook to ensure the canvas element is available before creating the chart
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    if (this.signupOverviewChartEl) {
      this.signupsOverviewChart = new Chart(this.signupOverviewChartEl.nativeElement, {
        type: "bar",
        data: this.signupOverviewData,
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
}

