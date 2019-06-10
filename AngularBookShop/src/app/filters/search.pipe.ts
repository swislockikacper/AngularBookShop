import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "../models/book";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(items: Book[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(book => {
      return (
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText)
      );
    });
  }
}
