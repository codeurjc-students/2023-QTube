import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OutComponent } from './out.component';
import { RoundedIconComponent } from 'src/app/shared/components/rounded-icon/rounded-icon.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';

describe('OutComponent', () => {
  let component: OutComponent;
  let fixture: ComponentFixture<OutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutComponent, RoundedIconComponent, BrandComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(OutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
