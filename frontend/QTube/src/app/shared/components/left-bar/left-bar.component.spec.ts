import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { LeftBarComponent } from './left-bar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

describe('LeftBarComponent', () => {
  let component: LeftBarComponent;
  let fixture: ComponentFixture<LeftBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBarComponent, ButtonComponent],
      imports: [RouterModule, RouterModule.forRoot([])],
    });
    fixture = TestBed.createComponent(LeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
