export class Video {
  constructor(
    public title: string,
    public description: string,
    public slug: string,
    public source: string,
    public thumbnailSource: string,
    public date: Date
  ) {}
}
