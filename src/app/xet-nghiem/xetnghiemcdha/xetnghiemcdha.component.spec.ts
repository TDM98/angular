import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XetnghiemcdhaComponent } from './xetnghiemcdha.component';

describe('XetnghiemcdhaComponent', () => {
  let component: XetnghiemcdhaComponent;
  let fixture: ComponentFixture<XetnghiemcdhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XetnghiemcdhaComponent]
    });
    fixture = TestBed.createComponent(XetnghiemcdhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
