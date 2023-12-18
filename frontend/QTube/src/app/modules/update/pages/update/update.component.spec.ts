import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FilePondComponent, FilePondModule } from 'ngx-filepond';

import { UpdateComponent } from './update.component';
import { VideoPlayerComponent } from 'src/app/shared/components/video-player/video-player.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent, VideoPlayerComponent, FilePondComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FilePondModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
