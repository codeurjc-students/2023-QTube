import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCtaComponent } from './login-cta.component';

describe('LoginCtaComponent', () => {
  let component: LoginCtaComponent;
  let fixture: ComponentFixture<LoginCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCtaComponent]
    });
    fixture = TestBed.createComponent(LoginCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
