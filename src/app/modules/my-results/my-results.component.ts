import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
      id: "1",
      name: 'BioAge Assessment',
      date: '2015-03-25',
    },
    {
      id: "2",
      name: 'BioAge Assessment',
      date: '2015-01-26',
    },
    {
      id: "3",
      name: 'BioAge Assessment',
      date: '2015-02-27',
    },
    {
      id: "4",
      name: 'BioAge Assessment',
      date: '2015-04-05',
    },
    {
      id: "5",
      name: 'BioAge Assessment',
      date: '2015-01-25',
    },
  ];

  user: UserModel | null;
  constructor(private authService: AuthService, private titleService: Title){
    this.user = authService.getUser();
  }
  ngOnInit(): void {
    this.onSort('new');
    //this.assessmentResults = [];
    this.titleService.setTitle('My Results - BioAge');
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
