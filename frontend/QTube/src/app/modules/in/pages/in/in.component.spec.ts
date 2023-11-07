import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { InComponent } from './in.component';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';
import { LeftBarComponent } from 'src/app/shared/components/left-bar/left-bar.component';
import { MobileBarComponent } from 'src/app/shared/components/mobile-bar/mobile-bar.component';
import { DrawerComponent } from 'src/app/shared/components/drawer/drawer.component';
import { RoundedIconComponent } from 'src/app/shared/components/rounded-icon/rounded-icon.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';
import { VerticalContentComponent } from 'src/app/shared/components/vertical-content/vertical-content.component';
import { HorizontalContentComponent } from 'src/app/shared/components/horizontal-content/horizontal-content.component';

describe('InComponent', () => {
  let component: InComponent;
  let fixture: ComponentFixture<InComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InComponent,
        TopBarComponent,
        LeftBarComponent,
        MobileBarComponent,
        DrawerComponent,
        RoundedIconComponent,
        BrandComponent,
        VerticalContentComponent,
        HorizontalContentComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(InComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
