import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerBarComponent } from './drawer-bar.component';

describe('DrawerBarComponent', () => {
  let component: DrawerBarComponent;
  let fixture: ComponentFixture<DrawerBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerBarComponent]
    });
    fixture = TestBed.createComponent(DrawerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
