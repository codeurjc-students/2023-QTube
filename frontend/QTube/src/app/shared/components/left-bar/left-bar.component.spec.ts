import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarComponent } from './left-bar.component';
import { ButtonComponent } from '../button/button.component';

describe('LeftBarComponent', () => {
  let component: LeftBarComponent;
  let fixture: ComponentFixture<LeftBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBarComponent, ButtonComponent],
    });
    fixture = TestBed.createComponent(LeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
