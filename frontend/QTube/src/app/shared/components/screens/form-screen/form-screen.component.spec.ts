import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormScreenComponent } from './form-screen.component';

describe('FormScreenComponent', () => {
  let component: FormScreenComponent;
  let fixture: ComponentFixture<FormScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormScreenComponent]
    });
    fixture = TestBed.createComponent(FormScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
