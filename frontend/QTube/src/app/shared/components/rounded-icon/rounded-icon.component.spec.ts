import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedIconComponent } from './rounded-icon.component';

describe('RoundedIconComponent', () => {
  let component: RoundedIconComponent;
  let fixture: ComponentFixture<RoundedIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedIconComponent]
    });
    fixture = TestBed.createComponent(RoundedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
