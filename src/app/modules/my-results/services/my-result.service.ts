import { Injectable } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { AssessmentResultModel } from './../models/assessment-result.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyResultService {
  user!: UserModel;

  private assesmentResultsSub = new Subject<AssessmentResultModel[]>();
  assessmentResults$ = this.assesmentResultsSub.asObservable();

  constructor(private authService: AuthService) {}

  getResults() {
    const data = [
      {
        id: '1',
        name: 'BioAge Assessment',
        date: new Date('2015-03-25'),
      },
      {
        id: '2',
        name: 'BioAge Assessment',
        date: new Date('2015-01-26'),
      },
      {
        id: '3',
        name: 'BioAge Assessment',
        date: new Date('2015-02-27'),
      },
      {
        id: '4',
        name: 'BioAge Assessment',
        date: new Date('2015-04-05'),
      },
      {
        id: '5',
        name: 'BioAge Assessment',
        date: new Date('2015-01-25'),
      },
    ];

    this.assesmentResultsSub.next(data);
  }
}
