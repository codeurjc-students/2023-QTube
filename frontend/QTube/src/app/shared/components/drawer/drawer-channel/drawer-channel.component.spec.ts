import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerChannelComponent } from './drawer-channel.component';

describe('DrawerChannelComponent', () => {
  let component: DrawerChannelComponent;
  let fixture: ComponentFixture<DrawerChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerChannelComponent]
    });
    fixture = TestBed.createComponent(DrawerChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
