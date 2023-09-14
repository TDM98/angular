import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundItemComponent } from './notfound-item.component';

describe('NotfoundItemComponent', () => {
  let component: NotfoundItemComponent;
  let fixture: ComponentFixture<NotfoundItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundItemComponent]
    });
    fixture = TestBed.createComponent(NotfoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
