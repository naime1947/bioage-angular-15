import { Component } from '@angular/core';
import { BreadcrumbService } from '@shared/components/breadcrumbs/services/breadcrumb.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(public breadcrumbService: BreadcrumbService) {}
}
