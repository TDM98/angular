import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noisoi6hinhComponent } from './noisoi6hinh.component';

describe('Noisoi6hinhComponent', () => {
  let component: Noisoi6hinhComponent;
  let fixture: ComponentFixture<Noisoi6hinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Noisoi6hinhComponent]
    });
    fixture = TestBed.createComponent(Noisoi6hinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
