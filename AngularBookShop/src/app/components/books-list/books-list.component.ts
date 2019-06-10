import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Observable<Book[]>;
  searchText: string='';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.books();
  }
}
