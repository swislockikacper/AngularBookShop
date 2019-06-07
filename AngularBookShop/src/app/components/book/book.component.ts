import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/models/book";
import { CartService } from "src/app/services/cart.service";
import { Router } from '@angular/router';

@Component({
  selector: "book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private cartService: CartService, private router: Router) {}

  addToCart = (id: string): void => this.cartService.addToCart(id);

  goToOrder = (id: string): void => {
    this.cartService.addToCart(id);
    window.location.href = "http://localhost:4200/cart";
  };

  ngOnInit() {}
}
