import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { FilePondOptions } from 'filepond';

import {
  maximumFileSizeInBytes,
  maximumFileSizeInMB,
  acceptedImages,
  maximumDescriptionLength,
  maximumTitleLength,
  title,
} from 'src/app/core/constants/constants';

import { UpdateVideo } from 'src/app/core/models/updateVideo.model';

import {
  AcceptedFileTypeValidator,
  FileSizeValidator,
} from 'src/app/core/validators/validators';

import { DownloadVideo } from 'src/app/core/models/downloadVideo.model';

import { VideoService } from 'src/app/core/services/video.service';

/**
 * Update the details of a video.
 * @class
 */
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [VideoService],
})
export class UpdateComponent implements OnInit {
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
   * Slug of the video to update. It will be extracted from the route and used
   * for fetching the video.
   */
  private _slug = '';

  /**
   * Video to update. Used to display data in the UI.
   * @property {DownloadVideo}
   */
  video: DownloadVideo = {} as DownloadVideo;

  /**
   * Form to update a video.
   * @property {FormGroup}
   */
  form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    thumbnail: new FormControl(),
  });

  /**
   * Flag to indicate if the form has been submitted. It is used to show
   * invalid field errors in the UI.
   * @property {boolean}
   */
  isSubmitted = false;

  /**
   * Video thumbnail preview.
   *
   * Used to display the thumbnail preview in the UI.
   *
   * It will have the thumbnail of the `DownloadVideo` object itself or the one
   * that the user enters in the form.
   *
   * @property {string}
   */
  thumbnail = '';

  /**
   * FilePond thumbnail options.
   * @property {FilePondOptions}
   * @description
   * - `onupdatefiles`: Event handler triggered when files are updated.
   *
   *   - If no files are present, it invokes the `_preview` method to update
   *     the thumbnail preview and then triggers the change detection mechanism
   *     to reflect the changes.
   *
   *   - If files are present, it extracts the first file, updates the form's
   *     thumbnail value, and asynchronously reads the file as a data URL. The
   *     resulting URL is assigned to the `thumbnail` property for displaying
   *     the thumbnail preview. Finally, the change detection mechanism is
   *     triggered to reflect the changes in the UI.
   */
  filePondOptions: FilePondOptions = {
    labelIdle:
      '<span class="text-qt-gray-8 !text-sm 4sm:!text-base">Drop your new <span class="text-qt-blue-2">thumbnail</span> here or <span class="underline underline-offset-4 cursor-pointer">Browse</span></span>',
    maxFiles: 1,
    credits: false,
    onupdatefiles: (files) => {
      if (files.length === 0) {
        this._preview();
        this._changeDetectorRef.detectChanges();
        return;
      }

      const file: Blob = files[0].file;

      this.form.patchValue({
        thumbnail: file,
      });

      const fileReader: FileReader = new FileReader();

      fileReader.onloadend = () => {
        this.thumbnail = fileReader.result as string;

        this._changeDetectorRef.detectChanges();
      };

      fileReader.readAsDataURL(file);
    },
  };

  constructor(
    private _titleService: Title,
    private _activatedRoute: ActivatedRoute,
    private _videoService: VideoService,
    private _formBuilder: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._init();
  }

  /**
   * Getter for form controls.
   * @getter
   */
  get controls() {
    return this.form.controls;
  }

  /**
   * Initializes the video editing page by setting the current video based on
   * the 'slug' route parameter, updating the page title, populating the form
   * and displaying the video thumbnail preview.
   * @private
   */
  private _init() {
    this._activatedRoute.params.subscribe((params) => {
      this._slug = params['slug'];

      this._videoService.video(this._slug).subscribe((video) => {
        this.video = video;
        this._title();
        this._form();
        this._preview();
      });
    });
  }

  /**
   * Initializes the form.
   * @method
   * @private
   */
  private _form() {
    this.form = this._formBuilder.group({
      title: new FormControl(this.video.title, [
        Validators.required,
        Validators.maxLength(maximumTitleLength),
      ]),
      description: new FormControl(this.video.description, [
        Validators.maxLength(maximumDescriptionLength),
      ]),
      thumbnail: new FormControl([
        ,
        [
          AcceptedFileTypeValidator(acceptedImages),
          FileSizeValidator(maximumFileSizeInBytes),
        ],
      ]),
    });
  }

  /**
   * Handles the form submission process.
   *
   * Marks the form as submitted, checks for form validity and initiates video
   * update using the provided form values.
   *
   * If the form is valid, creates a new `UpdateVideo` object and invokes
   * `_update` method to handle the actual video upload process.
   *
   * @method
   */
  onSubmit() {
    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    const updateVideo: UpdateVideo = new UpdateVideo(
      this.form.value.title,
      this.form.value.description,
      this.form.value.thumbnail
    );

    console.log(updateVideo);
  }

  /**
   * Update a video using the provided `UpdateVideo` object.
   *
   * Calls the video service's create method with the provided
   * `UpdateVideo`, and if the operation is successful, navigates to home.
   *
   * @param {UpdateVideo} video - The video information to be uploaded.
   * @method
   * @private
   */
  private _update() {
    // TODO: Implement video update.
  }

  /**
   * Set the title of the page.
   * @private
   * @method
   */
  private _title() {
    this._titleService.setTitle(`Editing ${this.video.title} / ${title}`);
  }

  /**
   * Initialize the video thumbnail preview.
   * @private
   * @method
   */
  private _preview() {
    this.thumbnail = this.video.thumbnailSource;
  }
}
