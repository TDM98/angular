import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MriComponent } from './mri.component';

describe('MriComponent', () => {
  let component: MriComponent;
  let fixture: ComponentFixture<MriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MriComponent]
    });
    fixture = TestBed.createComponent(MriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
