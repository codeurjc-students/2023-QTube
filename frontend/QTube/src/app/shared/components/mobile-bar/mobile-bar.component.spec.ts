import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBarComponent } from './mobile-bar.component';
import { ButtonComponent } from '../button/button.component';

describe('MobileBarComponent', () => {
  let component: MobileBarComponent;
  let fixture: ComponentFixture<MobileBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBarComponent, ButtonComponent],
    });
    fixture = TestBed.createComponent(MobileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
