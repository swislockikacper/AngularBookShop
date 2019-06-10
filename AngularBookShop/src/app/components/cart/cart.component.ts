import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { BookService } from "src/app/services/book.service";
import { CartElement } from "src/app/models/cart-element";
import { Book } from "src/app/models/book";
import { CartDisplay } from "src/app/models/cart-display";
import { Observable } from "rxjs";
import { async } from "q";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartElements: CartElement[];
  booksObservable: Observable<Book[]>;
  books: Book[] = [];
  cartDisplayElements: CartDisplay[];

  constructor(
    private cartService: CartService,
    private bookService: BookService
  ) {}

  getDisplayElements = (): void => {
    this.cartElements = this.cartService.getCart();
    this.bookService
      .booksByIds(this.cartElements.map(b => b.id))
      .subscribe((res: Book[]) => {
        this.books = res as Book[];
        
        this.cartDisplayElements = this.cartService.createDataToDisplay(
          this.cartElements,
          this.books
        );
      });
  };

  clearCart = (): void => this.cartService.clearCart();

  ngOnInit() {
    this.getDisplayElements();
  }
}
