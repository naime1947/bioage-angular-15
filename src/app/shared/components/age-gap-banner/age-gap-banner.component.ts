import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-age-gap-banner',
  templateUrl: './age-gap-banner.component.html',
  styleUrls: ['./age-gap-banner.component.scss'],
})
export class AgeGapBannerComponent implements OnInit, OnChanges {
  description =
    'Research has shown a 5 year difference between BioAge and chronological age is associated with an increased risk of conditions like cardiovascular disease';
  @Input() yourAge!: number;
  @Input() yourBioAge!: number;

  ageDifference!: number;
  ageDifferenceAbs!: number;

  ngOnInit(): void {
    this.setAgeDifference();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setAgeDifference();
  }
  setAgeDifference(){
    this.ageDifference = this.yourAge - this.yourBioAge;
    this.ageDifferenceAbs = Math.abs(this.ageDifference);
    this.ageDifferenceAbs =
      this.ageDifferenceAbs > 3 ? 3 : this.ageDifferenceAbs;
  }
}
