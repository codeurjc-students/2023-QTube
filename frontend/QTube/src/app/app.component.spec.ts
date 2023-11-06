import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { NgProgressComponent, NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterModule, NgProgressModule, NgProgressComponent],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
