import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { Chart, registerables } from 'chart.js';
import annotationPlugin  from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('compareOthers') compareOthers!: ElementRef;

  user: UserModel | null;
  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const ageGaps = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    const numberOfPeoples = [
      100, 1200, 3000, 6000, 8000, 8500, 9000, 9800, 9900, 11000, 11300, 9000,
      8500, 8100, 7500, 4500, 3400, 1300, 700, 400,
    ];

    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ageGaps,
        datasets: [
          {
            label: 'Dataset 1',
            data: numberOfPeoples,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132, 0.4)',
            order: 1,
          },
          {
            label: 'Dataset 2',
            data: numberOfPeoples,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235, 0.7)',
            type: 'line',
            order: 0,
          },
        ],
      },
      options: {
        responsive: true,
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
                backgroundColor: 'rgba(25, 99, 132, 0.25)',
              },
              point2: {
                type: 'point',
                xValue: 9,
                yValue: 9900,
                backgroundColor: 'rgba(25, 99, 132, 0.25)',
              },
              label1: {
                type: 'label',
                xValue: 15,
                yValue: 4500,
                backgroundColor: 'rgba(17,41,73, 1)',
                color: 'rgba(255, 255, 255)',
                content: ['You (17 years)'],
                font: {
                  size: 12
                }
              },
              label2: {
                type: 'label',
                xValue: 7,
                yValue: 8000,
                backgroundColor: 'rgba(17,41,73, 1)',
                color: 'rgba(255, 255, 255)',
                content: ['Average (8 years)'],
                font: {
                  size: 12
                }
              }
            },
          },
        },
      },
    });
  }
}
