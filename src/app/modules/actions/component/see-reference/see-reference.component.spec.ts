import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeReferenceComponent } from './see-reference.component';

describe('SeeReferenceComponent', () => {
  let component: SeeReferenceComponent;
  let fixture: ComponentFixture<SeeReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
