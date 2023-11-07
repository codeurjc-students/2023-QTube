import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DrawerComponent } from './drawer.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';
import { RoundedIconComponent } from 'src/app/shared/components/rounded-icon/rounded-icon.component';
import { HorizontalContentComponent } from 'src/app/shared/components/horizontal-content/horizontal-content.component';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DrawerComponent,
        BrandComponent,
        RoundedIconComponent,
        HorizontalContentComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
