import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsecuredFooterComponent } from './unsecured-footer.component';

describe('UnsecuredFooterComponent', () => {
  let component: UnsecuredFooterComponent;
  let fixture: ComponentFixture<UnsecuredFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsecuredFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsecuredFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
