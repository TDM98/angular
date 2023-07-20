import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThamdochucnangComponent } from './thamdochucnang.component';

describe('ThamdochucnangComponent', () => {
  let component: ThamdochucnangComponent;
  let fixture: ComponentFixture<ThamdochucnangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThamdochucnangComponent]
    });
    fixture = TestBed.createComponent(ThamdochucnangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
