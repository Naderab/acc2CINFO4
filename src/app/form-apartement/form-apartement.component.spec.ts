import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApartementComponent } from './form-apartement.component';

describe('FormApartementComponent', () => {
  let component: FormApartementComponent;
  let fixture: ComponentFixture<FormApartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormApartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormApartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
