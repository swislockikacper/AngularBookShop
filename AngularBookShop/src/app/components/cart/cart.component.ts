import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { BookService } from "src/app/services/book.service";
import { CartElement } from "src/app/models/cart-element";
import { Book } from "src/app/models/book";
import { CartDisplay } from "src/app/models/cart-display";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartElements: CartElement[];
  books: Book[];
  cartDisplayElements: CartDisplay[];
  element: CartDisplay = new CartDisplay('1', 'title','adasd', 'author', 12, 1);

  constructor(
    private cartService: CartService,
    private bookService: BookService
  ) {}

  getDisplayElements = (): CartDisplay[] => {
    this.cartElements = this.cartService.getCart();
    this.books = this.bookService.booksByIds(this.cartElements.map(b => b.id));

    return this.cartService.createDataToDisplay(this.cartElements, this.books);
  };

  clearCart = (): void => this.cartService.clearCart();

  ngOnInit() {}
}
