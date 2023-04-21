import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheScienceComponent } from './the-science.component';

describe('TheScienceComponent', () => {
  let component: TheScienceComponent;
  let fixture: ComponentFixture<TheScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheScienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
