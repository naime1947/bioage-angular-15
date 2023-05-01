import { Injectable } from '@angular/core';
import { Subject, filter, map } from 'rxjs';
import { BreadcrumbDataModel } from '../models/breadcrumb-data.model';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private breadcrumbsDataSub = new Subject<BreadcrumbDataModel[]>();
  public breadcrumbsData$ = this.breadcrumbsDataSub.asObservable();
  constructor(private router: Router, private title: Title) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((data) => {
        this.addBreadcrumbData([]);
        this.title.setTitle("BioAge")
      });
  }

  addBreadcrumbData(data: BreadcrumbDataModel[]) {
    this.breadcrumbsDataSub.next(data);
  }
}
