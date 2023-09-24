import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerPlaylistComponent } from './drawer-playlist.component';

describe('DrawerPlaylistComponent', () => {
  let component: DrawerPlaylistComponent;
  let fixture: ComponentFixture<DrawerPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerPlaylistComponent]
    });
    fixture = TestBed.createComponent(DrawerPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
