import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WilderCoursComponent } from './wilder-cours.component';

describe('WilderCoursComponent', () => {
  let component: WilderCoursComponent;
  let fixture: ComponentFixture<WilderCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WilderCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WilderCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
