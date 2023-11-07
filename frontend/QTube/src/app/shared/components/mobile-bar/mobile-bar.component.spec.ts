import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MobileBarComponent } from './mobile-bar.component';
import { VerticalContentComponent } from 'src/app/shared/components/vertical-content/vertical-content.component';

describe('MobileBarComponent', () => {
  let component: MobileBarComponent;
  let fixture: ComponentFixture<MobileBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBarComponent, VerticalContentComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(MobileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
