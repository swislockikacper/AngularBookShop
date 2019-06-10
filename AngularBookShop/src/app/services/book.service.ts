import { Injectable } from "@angular/core";
import { Book } from "../models/book";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  booksList: Book[];

  books = (): Observable<Book[]> =>
    this.httpClient.get<Book[]>("https://localhost:5001/api/Books");

  booksByIds = (ids: string[]): Observable<Book[]> =>
    this.httpClient.get<Book[]>(
      "https://localhost:5001/api/Books/ByIds?" + this.createUrlWithIds(ids)
    );

  private createUrlWithIds = (ids: string[]): string => {
    let params = "";

    for (let id of ids) {
      params += "&ids=" + id;
    }

    return params;
  };
}
