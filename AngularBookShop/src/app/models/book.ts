export class Book {
  constructor(
    public id: string,
    public title: string,
    public photo: string,
    public author: string,
    public numberOfPages: number,
    public price: number
  ) {}
}
