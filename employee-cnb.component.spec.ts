import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCnbComponent } from './employee-cnb.component';

describe('EmployeeCnbComponent', () => {
  let component: EmployeeCnbComponent;
  let fixture: ComponentFixture<EmployeeCnbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCnbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
