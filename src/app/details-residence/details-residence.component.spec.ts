import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResidenceComponent } from './details-residence.component';

describe('DetailsResidenceComponent', () => {
  let component: DetailsResidenceComponent;
  let fixture: ComponentFixture<DetailsResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsResidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
