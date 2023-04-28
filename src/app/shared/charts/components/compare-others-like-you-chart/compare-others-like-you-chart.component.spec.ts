import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareOthersLikeYouChartComponent } from './compare-others-like-you-chart.component';

describe('CompareOthersLikeYouChartComponent', () => {
  let component: CompareOthersLikeYouChartComponent;
  let fixture: ComponentFixture<CompareOthersLikeYouChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareOthersLikeYouChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareOthersLikeYouChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
