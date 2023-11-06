import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { VideoComponent } from './video.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent, DialogComponent, ButtonComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
