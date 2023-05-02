import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
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

    this.myResultService.assessmentResults$.pipe().subscribe(data => {
      console.log(data);
      if(data && data.length){
        sortAssessment(data, 'new');
        this.latestAssessmentResult = data[0];
      }
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dashbaord - BioAge');
    this.myResultService.getResults();
  }
}
