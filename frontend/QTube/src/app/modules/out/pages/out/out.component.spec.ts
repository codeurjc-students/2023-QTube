import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OutComponent } from './out.component';

describe('OutComponent', () => {
  let component: OutComponent;
  let fixture: ComponentFixture<OutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutComponent],
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
