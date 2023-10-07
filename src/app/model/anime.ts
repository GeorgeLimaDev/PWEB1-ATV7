export class Anime {
  constructor(private _title: string, private _image: string, private _review: string) {
  }

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  get image(): string {
    return this._image;
  }

  set image(newImage: string) {
    this._image = newImage;
  }

  get review(): string {
    return this._review;
  }

  set review(newReview: string) {
    this._review = newReview;
  }

}
