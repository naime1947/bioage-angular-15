import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-bioage-progress-chart',
  templateUrl: './bioage-progress-chart.component.html',
  styleUrls: ['./bioage-progress-chart.component.scss'],
})
export class BioageProgressChartComponent implements AfterViewInit, OnDestroy {
  myChart!: Chart;

  constructor() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      const ageGaps = [
        2021, 2022, 2023
      ];

      const biologicalAge = [
        30, 54, 68
      ];
      const chronologicalAge = [40, 48, 51]

      this.myChart = new Chart('bioageprogresschart', {
        type: 'line',
        data: {
          labels: ageGaps,
          datasets: [
            {
              label: 'Biological age',
              data: biologicalAge,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.4)',
              order: 1,
              type: 'line',
              fill: false,
            },
            {
              label: 'Chronological age',
              data: chronologicalAge,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgb(54, 162, 235, 0.7)',
              type: 'line',
              fill: '-1',
              order: 0,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {

          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
            title: {
              display: false,
              text: 'Chart.js Combined Line/Bar Chart',
            },
            annotation: {
              annotations: {

              },
            },
          },
        },
      });
    }, 0);
  }

  ngOnDestroy(): void {
    this.myChart.destroy();
  }
}
