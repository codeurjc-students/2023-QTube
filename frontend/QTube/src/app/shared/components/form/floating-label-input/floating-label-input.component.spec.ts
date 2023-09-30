import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLabelInputComponent } from './floating-label-input.component';

describe('FloatingLabelInputComponent', () => {
  let component: FloatingLabelInputComponent;
  let fixture: ComponentFixture<FloatingLabelInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingLabelInputComponent]
    });
    fixture = TestBed.createComponent(FloatingLabelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
