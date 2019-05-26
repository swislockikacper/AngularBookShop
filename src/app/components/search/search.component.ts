import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'search-book',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  phrase = '';

  constructor() { }

  ngOnInit() {
  }

  search = (): Book => {
    return new Book(2, 'ss', 'ss');
  }
}
