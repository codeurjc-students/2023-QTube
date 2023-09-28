import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSeparatorComponent } from './drawer-separator.component';

describe('DrawerSeparatorComponent', () => {
  let component: DrawerSeparatorComponent;
  let fixture: ComponentFixture<DrawerSeparatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerSeparatorComponent]
    });
    fixture = TestBed.createComponent(DrawerSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
