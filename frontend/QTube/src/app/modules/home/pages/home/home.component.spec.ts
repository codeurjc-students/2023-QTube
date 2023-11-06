import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LeftBarComponent } from 'src/app/shared/components/left-bar/left-bar.component';
import { VideosComponent } from 'src/app/shared/components/videos/videos.component';
import { MobileBarComponent } from 'src/app/shared/components/mobile-bar/mobile-bar.component';
import { DrawerComponent } from 'src/app/shared/components/drawer/drawer.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        TopBarComponent,
        SearchBarComponent,
        ButtonComponent,
        LeftBarComponent,
        VideosComponent,
        MobileBarComponent,
        DrawerComponent,
      ],
      imports: [RouterModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
