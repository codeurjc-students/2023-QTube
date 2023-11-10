import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { FilePondOptions } from 'filepond';

import { UploadVideo } from 'src/app/core/models/uploadVideo.model';
import { maximumFileSizeInMB } from 'src/app/core/constants/constants';
import { NotificationService } from 'src/app/core/services/notification.service';
import { VideoService } from 'src/app/core/services/video.service';
import { AcceptedFileTypeValidator } from 'src/app/core/validators/AcceptedFileTypeValidator';
import { FileSizeValidator } from 'src/app/core/validators/FileSizeValidator';

/**
 * Component to create a new video.
 */
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  /**
   * Form to create a new video.
   */
  form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    video: new FormControl(),
    thumbnail: new FormControl(),
  });

  /**
   * Flag to indicate if the form has been submitted. It is used to show
   * invalid field errors.
   */
  public isSubmitted = false;

  /**
   * FilePond thumbnail options.
   */
  pondThumbnailOptions: FilePondOptions = {
    labelIdle:
      '<span class="text-qt-gray-8">Drop your <span class="text-qt-blue-2">thumbnail</span> here or <span class="underline underline-offset-4 cursor-pointer">Browse</span></span>',
    maxFiles: 1,
    credits: false,
    onupdatefiles: (files) => {
      if (files.length === 0) {
        return;
      }

      this.form.patchValue({
        thumbnail: files[0].file,
      });
    },
  };

  /**
   * FilePond video options.
   */
  pondVideoOptions: FilePondOptions = {
    labelIdle:
      '<span class="text-qt-gray-8">Drop your <span class="text-qt-blue-2">video</span> here or <span class="underline underline-offset-4 cursor-pointer">Browse</span></span>',
    maxFiles: 1,
    credits: false,
    onupdatefiles: (files) => {
      if (files.length === 0) {
        return;
      }

      this.form.patchValue({
        video: files[0].file,
      });
    },
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _videoService: VideoService,
    private _notificationService: NotificationService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._initForm();
  }

  /**
   * Initializes the form.
   */
  private _initForm() {
    this.form = this._formBuilder.group({
      title: [, [Validators.required, Validators.maxLength(25)]],
      description: [, Validators.maxLength(250)],
      video: [
        ,
        [
          Validators.required,
          AcceptedFileTypeValidator(['video/mp4', 'video/webm']),
          FileSizeValidator(maximumFileSizeInMB * 1024 * 1024),
        ],
      ],
      thumbnail: [
        ,
        [
          Validators.required,
          AcceptedFileTypeValidator([
            'image/jpeg',
            'image/png',
            'image/webp',
            'image/gif',
          ]),
          FileSizeValidator(maximumFileSizeInMB * 1024 * 1024),
        ],
      ],
    });
  }

  /**
   * Getter for form controls.
   */
  get controls() {
    return this.form.controls;
  }

  /**
   * Handles the form submission process.
   *
   * Marks the form as submitted, checks for form validity, and initiates video
   * upload using the provided form values.
   *
   * If the form is valid, creates a new `UploadVideo` object and invokes
   * `_uploadVideo` method to handle the actual video upload process.
   */
  onSubmit() {
    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    const uploadVideo = new UploadVideo(
      this.form.value.title,
      this.form.value.description,
      this.form.value.video,
      this.form.value.thumbnail
    );

    this._uploadVideo(uploadVideo);
  }

  /**
   * Upload a video using the provided `UploadVideo` object.
   *
   * Calls the video service's create method with the provided
   * `UploadVideo`, and if the operation is successful, navigates to home.
   *
   * @param {UploadVideo} uploadVideo - The video information to be uploaded.
   */
  private _uploadVideo(uploadVideo: UploadVideo) {
    this._videoService.create(uploadVideo).subscribe({
      next: () => {
        this._notificationService.success();
        this._router.navigate(['']);
      },
      error: () => {
        this._notificationService.error();
      },
    });
  }
}
