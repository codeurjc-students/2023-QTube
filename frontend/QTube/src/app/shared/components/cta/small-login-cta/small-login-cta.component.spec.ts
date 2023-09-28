import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLoginCtaComponent } from './small-login-cta.component';

describe('SmallLoginCtaComponent', () => {
  let component: SmallLoginCtaComponent;
  let fixture: ComponentFixture<SmallLoginCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallLoginCtaComponent]
    });
    fixture = TestBed.createComponent(SmallLoginCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
