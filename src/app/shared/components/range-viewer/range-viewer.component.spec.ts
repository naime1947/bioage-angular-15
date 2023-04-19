import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeViewerComponent } from './range-viewer.component';

describe('RangeViewerComponent', () => {
  let component: RangeViewerComponent;
  let fixture: ComponentFixture<RangeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
