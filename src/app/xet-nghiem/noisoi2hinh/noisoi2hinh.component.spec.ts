import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noisoi2hinhComponent } from './noisoi2hinh.component';

describe('Noisoi2hinhComponent', () => {
  let component: Noisoi2hinhComponent;
  let fixture: ComponentFixture<Noisoi2hinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Noisoi2hinhComponent]
    });
    fixture = TestBed.createComponent(Noisoi2hinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
