import { Image } from './image.model';

export class Video {
  constructor(
    public title: string,
    public description: string,
    public slug: string,
    public date: Date,
    public image: Image
  ) {}
}
