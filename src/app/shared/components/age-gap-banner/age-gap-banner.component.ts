import { Component } from '@angular/core';

@Component({
  selector: 'app-age-gap-banner',
  templateUrl: './age-gap-banner.component.html',
  styleUrls: ['./age-gap-banner.component.scss'],
})
export class AgeGapBannerComponent {
  description =
    'Research has shown a 5 year difference between BioAge and chronological age is associated with an increased risk of conditions like cardiovascular disease';
    yourAge = 50;
    yourBioAge = 53;
    ageDifference = this.yourAge - this.yourBioAge;
}
