import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

@Component({
  selector: 'app-compare-others-like-you-chart',
  templateUrl: './compare-others-like-you-chart.component.html',
  styleUrls: ['./compare-others-like-you-chart.component.scss'],
})
export class CompareOthersLikeYouChartComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild('compareOthersLikeYouChart') canvas!: ElementRef;

  myChart!: Chart;
  constructor() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      const gradient = this.canvas.nativeElement
        .getContext('2d')
        .createLinearGradient(0, 0, 450, 0);
      gradient.addColorStop('0', '#27D138');
      gradient.addColorStop('0.33', '#FAE100');
      gradient.addColorStop('0.62', '#FF9129');
      gradient.addColorStop('1', '#F2110E');

      const ageGaps = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ];

      const numberOfPeoples = [
        100, 1200, 3000, 6000, 8000, 8500, 9000, 9800, 9900, 11000, 11300, 9000,
        8500, 8100, 7500, 4500, 3400, 1300, 700, 400,
      ];

      this.myChart = new Chart('compareOthersLikeYouChart', {
        type: 'bar',
        data: {
          labels: ageGaps,
          datasets: [
            {
              label: 'Dataset 1',
              data: numberOfPeoples,
              borderColor: 'rgb(255, 99, 132)',
              borderRadius: 15,
              backgroundColor: gradient,
              order: 1,
              barPercentage: 1.1,
            },
            {
              label: 'Dataset 2',
              data: numberOfPeoples,
              borderColor: '#112949',
              borderWidth: 3,
              backgroundColor: 'rgb(54, 162, 235, 0.7)',
              type: 'line',
              order: 0,
            },
          ],
        },
        options: {
          responsive: true,
          elements: {
            line: {
              tension: 0.6,
            },
          },
          layout: {
            padding: 0,
          },
          plugins: {
            legend: {
              display: false,
              position: 'top',
            },
            title: {
              display: false,
              text: 'Chart.js Combined Line/Bar Chart',
            },
            annotation: {
              annotations: {
                point1: {
                  type: 'point',
                  xValue: 16,
                  yValue: 3400,
                  borderColor: '#112949',
                  borderWidth: 3,
                  backgroundColor: 'rgba(25, 99, 132, 0)',
                },
                point2: {
                  type: 'point',
                  xValue: 7,
                  yValue: 9800,
                  borderColor: '#112949',
                  borderWidth: 3,
                  backgroundColor: 'rgba(25, 99, 132, 0)',
                },
                label1: {
                  type: 'label',
                  xValue: 15,
                  yValue: 4500,
                  backgroundColor: 'rgba(17,41,73, 1)',
                  color: 'rgba(255, 255, 255)',
                  content: ['You (17 years)'],
                  padding: 12,
                  borderRadius: 8,
                  font: {
                    size: 12,
                  },
                },
                label2: {
                  type: 'label',
                  xValue: 7,
                  yValue: 8500,
                  backgroundColor: 'rgba(17,41,73, 1)',
                  padding: 12,
                  borderRadius: 8,
                  color: 'rgba(255, 255, 255)',
                  content: ['Average (8 years)'],
                  font: {
                    size: 12,
                  },
                },
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
