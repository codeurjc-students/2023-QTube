import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerContainerComponent } from './drawer-container.component';

describe('DrawerContainerComponent', () => {
  let component: DrawerContainerComponent;
  let fixture: ComponentFixture<DrawerContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerContainerComponent]
    });
    fixture = TestBed.createComponent(DrawerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
