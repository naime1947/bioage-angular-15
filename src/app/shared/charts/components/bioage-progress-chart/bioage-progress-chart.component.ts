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
              borderDash: [10,5],
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
            }
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
                line1:{
                  type: 'line',
                  yMin: 20,
                  yMax: 38,
                  xMin: 0,
                  xMax: 0,
                  borderColor: 'rgb(44, 210, 56)',
                  borderWidth: 15,
                },
                line2:{
                  type: 'line',
                  yMin: 38,
                  yMax: 52,
                  xMin: 0,
                  xMax: 0,
                  borderColor: 'rgb(253, 178, 25)',
                  borderWidth: 15
                },
                line3:{
                  type: 'line',
                  yMin: 52,
                  yMax: 70,
                  xMin: 0,
                  xMax: 0,
                  borderColor: 'rgb(243, 22, 16)',
                  borderWidth: 15
                }
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
