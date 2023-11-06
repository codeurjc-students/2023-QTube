import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VideosComponent } from './videos.component';

describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
