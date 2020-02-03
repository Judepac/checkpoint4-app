import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MofierFormComponent } from './mofier-form.component';

describe('MofierFormComponent', () => {
  let component: MofierFormComponent;
  let fixture: ComponentFixture<MofierFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MofierFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MofierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
