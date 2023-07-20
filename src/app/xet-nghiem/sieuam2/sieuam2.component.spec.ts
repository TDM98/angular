import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sieuam2Component } from './sieuam2.component';

describe('Sieuam2Component', () => {
  let component: Sieuam2Component;
  let fixture: ComponentFixture<Sieuam2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sieuam2Component]
    });
    fixture = TestBed.createComponent(Sieuam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
