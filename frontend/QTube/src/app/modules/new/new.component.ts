import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { FilePondOptions } from 'filepond';

import { NotificationService } from 'src/app/core/services/notification.service';
import { VideoService } from 'src/app/core/services/video.service';
import { UploadVideo } from 'src/app/core/models/uploadVideo.model';
import { AcceptedFileTypeValidator } from 'src/app/core/validators/AcceptedFileTypeValidator';
import { FileSizeValidator } from 'src/app/core/validators/FileSizeValidator';
import { maximumFileSizeInMB } from 'src/app/core/constants/constants';

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
      this.form.patchValue({
        video: files[0].file,
      });
    },
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _videoService: VideoService,
    private _notificationService: NotificationService
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
   * Creates a new video using `VideoService` when the form is submitted and all
   * its data is valid.
   */
  onSubmit() {
    this.isSubmitted = true;

    if (this.form.invalid) {
      this.form.reset();
      return;
    }

    const uploadVideo = new UploadVideo(
      this.form.value.title,
      this.form.value.description,
      this.form.value.video,
      this.form.value.thumbnail
    );

    this._notificationService.confirmOperationDialog(() =>
      this._videoService.create(uploadVideo)
    );
  }
}
