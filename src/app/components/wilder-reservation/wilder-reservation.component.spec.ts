import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WilderReservationComponent } from './wilder-reservation.component';

describe('WilderReservationComponent', () => {
  let component: WilderReservationComponent;
  let fixture: ComponentFixture<WilderReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WilderReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WilderReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
