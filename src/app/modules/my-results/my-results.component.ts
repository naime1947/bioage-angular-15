import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { AssessmentResultModel } from './models/assessment-result.model';
import { MyResultService } from './services/my-result.service';
import { sortAssessment } from '@shared/utilities/utils';

@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.scss'],
})
export class MyResultsComponent implements OnInit {
  assessmentResults!: AssessmentResultModel[];
  latestAssessmentResult!: AssessmentResultModel;

  user: UserModel | null;
  constructor(
    private authService: AuthService,
    private myResultSevice: MyResultService,
    private titleService: Title
  ) {
    this.user = authService.getUser();

    this.myResultSevice.assessmentResults$.pipe().subscribe((data) => {
      this.assessmentResults = data;
      if (this.assessmentResults && this.assessmentResults.length) {
        sortAssessment(this.assessmentResults, 'new');
        this.latestAssessmentResult = this.assessmentResults[0];
      }
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('My Results - BioAge');
    this.myResultSevice.getResults();
  }

  onSort(type: string){
    sortAssessment(this.assessmentResults, type);
  }
}
