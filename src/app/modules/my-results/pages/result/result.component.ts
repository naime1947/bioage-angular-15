import { Component, OnInit } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { BreadcrumbService } from '@shared/components/breadcrumbs/services/breadcrumb.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  user: UserModel | null;
  constructor(
    private authService: AuthService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.user = authService.getUser();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.breadcrumbService.addBreadcrumbData([
        {
          label: 'BioAge Assessments (March 27, 2022)',
          route: '',
        },
      ]);
    }, 0);
  }
}
