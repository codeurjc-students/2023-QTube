import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { FilePondOptions } from 'filepond';

import {
  maximumFileSizeInBytes,
  maximumFileSizeInMB,
  acceptedImages,
  acceptedVideos,
  maximumDescriptionLength,
  maximumTitleLength,
} from 'src/app/core/constants/constants';

import { UploadVideo } from 'src/app/core/models/uploadVideo.model';

import {
  AcceptedFileTypeValidator,
  FileSizeValidator,
} from 'src/app/core/validators/validators';

import { NotificationService } from 'src/app/core/services/notification.service';
import { VideoService } from 'src/app/core/services/video.service';

/**
 * Create a new video.
 * @class
 */
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  /**
   * Maximum file size in bytes.
   * @constant
   */
  readonly maximumFileSizeInBytes = maximumFileSizeInBytes;

  /**
   * Maximum file size in MB. Used to display the maximum file size in
   * the UI.
   * @constant
   */
  readonly maximumFileSizeInMB = maximumFileSizeInMB;

  /**
   * Maximum length of the title of a video. Used to display the maximum title
   * length in the UI.
   * @constant
   */
  readonly maximumTitleLength = maximumTitleLength;

  /**
   * Maximum length of the description of a video. Used to display the maximum
   * description length in the UI.
   * @constant
   */
  readonly maximumDescriptionLength = maximumDescriptionLength;

  /**
   * Form to create a new video.
   * @property {FormGroup}
   */
  form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    video: new FormControl(),
    thumbnail: new FormControl(),
  });

  /**
   * Flag to indicate if the form has been submitted. It is used to show
   * invalid field errors in the UI.
   * @property {boolean}
   */
  isSubmitted = false;

  /**
   * FilePond thumbnail options.
   * @property {FilePondOptions}
   */
  pondThumbnailOptions: FilePondOptions = {
    labelIdle:
      '<span class="text-qt-gray-8 !text-sm 4sm:!text-base">Drop your <span class="text-qt-blue-2">thumbnail</span> here or <span class="underline underline-offset-4 cursor-pointer">Browse</span></span>',
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
   * @property {FilePondOptions}
   */
  pondVideoOptions: FilePondOptions = {
    labelIdle:
      '<span class="text-qt-gray-8 !text-sm 4sm:!text-base">Drop your <span class="text-qt-blue-2">video</span> here or <span class="underline underline-offset-4 cursor-pointer">Browse</span></span>',
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
    this._form();
  }

  /**
   * Getter for form controls.
   * @getter
   */
  get controls() {
    return this.form.controls;
  }

  /**
   * Initializes the form.
   * @private
   * @method
   */
  private _form() {
    this.form = this._formBuilder.group({
      title: [
        ,
        [Validators.required, Validators.maxLength(maximumTitleLength)],
      ],
      description: [, Validators.maxLength(maximumDescriptionLength)],
      video: [
        ,
        [
          Validators.required,
          AcceptedFileTypeValidator(acceptedVideos),
          FileSizeValidator(maximumFileSizeInBytes),
        ],
      ],
      thumbnail: [
        ,
        [
          Validators.required,
          AcceptedFileTypeValidator(acceptedImages),
          FileSizeValidator(maximumFileSizeInBytes),
        ],
      ],
    });
  }

  /**
   * Handles the form submission process.
   *
   * Marks the form as submitted, checks for form validity, and initiates video
   * upload using the provided form values.
   *
   * If the form is valid, creates a new `UploadVideo` object and invokes
   * `_uploadVideo` method to handle the actual video upload process.
   *
   * @method
   */
  onSubmit() {
    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    const uploadVideo: UploadVideo = new UploadVideo(
      this.form.value.title,
      this.form.value.description,
      this.form.value.video,
      this.form.value.thumbnail
    );

    this._upload(uploadVideo);
  }

  /**
   * Upload a video using the provided `UploadVideo` object.
   *
   * Calls the video service's create method with the provided
   * `UploadVideo`, and if the operation is successful, navigates to home.
   *
   * @param {UploadVideo} video - The video information to be uploaded.
   * @method
   * @private
   */
  private _upload(video: UploadVideo) {
    this._videoService.create(video).subscribe({
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
