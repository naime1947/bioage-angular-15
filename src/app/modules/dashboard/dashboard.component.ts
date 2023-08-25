import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { AssessmentResultModel } from '@modules/my-results/models/assessment-result.model';
import { MyResultService } from '@modules/my-results/services/my-result.service';
import { sortAssessment } from '@shared/utilities/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  user: UserModel | null;
  latestAssessmentResult!: AssessmentResultModel;

  constructor(
    private authService: AuthService,
    private titleService: Title,
    private myResultService: MyResultService
  ) {
    this.user = this.authService.getUser();

    this.myResultService.assessmentResults$.pipe().subscribe((data) => {
      if (data && data.length) {
        sortAssessment(data, 'new');
        this.latestAssessmentResult = data[0];
      }
    });
  }

  yourAge = 53;
  yourBioAge = 57;
  ngOnInit(): void {
    this.titleService.setTitle('Dashbaord - BioAge');
    this.myResultService.getResults();

    setInterval(()=> {
      this.yourBioAge = this.getRandomInt(49, 57)
    }, 3000)
  }

  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
