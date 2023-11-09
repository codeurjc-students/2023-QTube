export class UploadVideo {
  public title: string;
  public description: string;
  public video: File;
  public thumbnail: File;

  constructor(
    title: string,
    description: string,
    video: File,
    thumbnail: File
  ) {
    this.title = title;
    this.description = description;
    this.video = video;
    this.thumbnail = thumbnail;
  }
}
