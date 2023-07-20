import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XetnghiemchisoComponent } from './xetnghiemchiso.component';

describe('XetnghiemchisoComponent', () => {
  let component: XetnghiemchisoComponent;
  let fixture: ComponentFixture<XetnghiemchisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XetnghiemchisoComponent]
    });
    fixture = TestBed.createComponent(XetnghiemchisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
