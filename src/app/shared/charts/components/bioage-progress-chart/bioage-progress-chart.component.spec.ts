import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioageProgressChartComponent } from './bioage-progress-chart.component';

describe('BioageProgressChartComponent', () => {
  let component: BioageProgressChartComponent;
  let fixture: ComponentFixture<BioageProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioageProgressChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioageProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
