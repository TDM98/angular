import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopplerComponent } from './doppler.component';

describe('DopplerComponent', () => {
  let component: DopplerComponent;
  let fixture: ComponentFixture<DopplerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DopplerComponent]
    });
    fixture = TestBed.createComponent(DopplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
