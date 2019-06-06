import { Injectable } from "@angular/core";
import { Book } from "../models/book";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BookService {
  private booksList: Book[];

  constructor(private httpClient: HttpClient) {}

  private getBooks = (): void => {
    this.httpClient
      .get<Book[]>('https://localhost:5001/api/Books')
      .subscribe(res => (this.booksList = res));
  };

  books = (): Book[] => {
    this.getBooks();
    return this.booksList;
  };

  booksByIds = (ids: string[]): Book[] => {
    this.getBooksByIds(ids);
    return this.booksList;
  }

  private getBooksByIds = (ids: string[]): void => {
    this.httpClient
      .get<Book[]>('https://localhost:5001/api/Books/ByIds?' + this.createUrlWithIds(ids))
      .subscribe(res => (this.booksList = res));
  };

  private createUrlWithIds = (ids: string[]): string => {
    let params = "";

    for (let id of ids) {
      params += "&ids=" + id;
    }

    return params;
  };
}
