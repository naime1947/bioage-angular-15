import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BreadcrumbDataModel } from './models/breadcrumb-data.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  constructor(private location: Location) {}
  @Input() breadcrumbData!: BreadcrumbDataModel[];
  back() {
    this.location.back();
  }
}
