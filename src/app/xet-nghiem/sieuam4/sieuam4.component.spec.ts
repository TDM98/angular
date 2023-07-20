import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sieuam4Component } from './sieuam4.component';

describe('Sieuam4Component', () => {
  let component: Sieuam4Component;
  let fixture: ComponentFixture<Sieuam4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sieuam4Component]
    });
    fixture = TestBed.createComponent(Sieuam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
