import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FilePondComponent, FilePondModule } from 'ngx-filepond';

import { NewComponent } from './new.component';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComponent, BrandComponent, FilePondComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FilePondModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
