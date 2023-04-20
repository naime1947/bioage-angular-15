import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.scss'],
})
export class MyResultsComponent implements OnInit {
  assessmentResults = [
    {
      name: 'BioAge Assessment',
      date: '2015-03-25',
    },
    {
      name: 'BioAge Assessment',
      date: '2015-01-26',
    },
    {
      name: 'BioAge Assessment',
      date: '2015-02-27',
    },
    {
      name: 'BioAge Assessment',
      date: '2015-04-05',
    },
    {
      name: 'BioAge Assessment',
      date: '2015-01-25',
    },
  ];

  user: UserModel | null;
  constructor(private authService: AuthService){
    this.user = authService.getUser();
  }
  ngOnInit(): void {
    this.onSort('new');
    //this.assessmentResults = [];
  }

  onSort(type: string) {
    if (type === 'new') {
      this.assessmentResults.sort((a, b) => {
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA < dateB ? 1 : -1;
      });
    } else {
      this.assessmentResults.sort((a, b) => {
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA > dateB ? 1 : -1;
      });
    }

    console.log(this.assessmentResults);
  }
}
