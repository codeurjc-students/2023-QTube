export class UpdateVideo {
  public title: string;
  public description: string;
  public thumbnail: File;

  constructor(title: string, description: string, thumbnail: File) {
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
  }
}
