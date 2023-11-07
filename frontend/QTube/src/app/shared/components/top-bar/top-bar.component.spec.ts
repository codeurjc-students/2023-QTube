import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TopBarComponent } from './top-bar.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';
import { RoundedIconComponent } from 'src/app/shared/components/rounded-icon/rounded-icon.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopBarComponent,
        SearchBarComponent,
        BrandComponent,
        RoundedIconComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
