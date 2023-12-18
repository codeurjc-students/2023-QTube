import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LeftBarComponent } from './left-bar.component';
import { VerticalContentComponent } from 'src/app/shared/components/vertical-content/vertical-content.component';
import { HorizontalContentComponent } from '../horizontal-content/horizontal-content.component';

describe('LeftBarComponent', () => {
  let component: LeftBarComponent;
  let fixture: ComponentFixture<LeftBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeftBarComponent,
        VerticalContentComponent,
        HorizontalContentComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(LeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
