import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsScreenComponent } from './bars-screen.component';

describe('BarsScreenComponent', () => {
  let component: BarsScreenComponent;
  let fixture: ComponentFixture<BarsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarsScreenComponent]
    });
    fixture = TestBed.createComponent(BarsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
