import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { LeftBarComponent } from 'src/app/shared/components/left-bar/left-bar.component';
import { VideosComponent } from 'src/app/shared/components/videos/videos.component';
import { MobileBarComponent } from 'src/app/shared/components/mobile-bar/mobile-bar.component';
import { DrawerComponent } from 'src/app/shared/components/drawer/drawer.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';
import { RoundedIconComponent } from 'src/app/shared/components/rounded-icon/rounded-icon.component';
import { HorizontalContentComponent } from 'src/app/shared/components/horizontal-content/horizontal-content.component';
import { VerticalContentComponent } from 'src/app/shared/components/vertical-content/vertical-content.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        TopBarComponent,
        SearchBarComponent,
        LeftBarComponent,
        VideosComponent,
        MobileBarComponent,
        DrawerComponent,
        BrandComponent,
        RoundedIconComponent,
        HorizontalContentComponent,
        VerticalContentComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
