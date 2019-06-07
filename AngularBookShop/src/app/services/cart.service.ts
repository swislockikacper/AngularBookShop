import { Injectable } from "@angular/core";
import { Book } from "../models/book";
import { CartElement } from "../models/cart-element";
import { CartDisplay } from "../models/cart-display";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private books: CartElement[] = [];

  constructor() {}

  addToCart = (id: string): void => {
    let bookIsInCart = false;

    if (localStorage.getItem("cart") != null) {
      this.books = JSON.parse(localStorage.getItem("cart"));

      for (let i of this.books) {
        if (i.id == id) {
          i.quantity++;
          bookIsInCart = true;
          localStorage.setItem("cart", JSON.stringify(this.books));

          break;
        }
      }
    } else {
      localStorage.setItem("cart", "");
    }

    if (!bookIsInCart) {
      this.books.push(new CartElement(id, 1));
      localStorage.setItem("cart", JSON.stringify(this.books));
    }
  };

  getCart = (): CartElement[] => JSON.parse(localStorage.getItem("cart"));

  clearCart = (): void => localStorage.setItem("cart", "");

  createDataToDisplay = (
    cartElements: CartElement[],
    books: Book[]
  ): CartDisplay[] => {
    let dataToDisplay: CartDisplay[] = [];

    if (books != null)
      for (let i of books) {
        let quantity = cartElements.find(el => el.id == i.id).quantity;

        dataToDisplay.push(
          new CartDisplay(
            i.id,
            i.title,
            i.photo,
            i.author,
            i.price * quantity,
            quantity
          )
        );
      }

    return dataToDisplay;
  };

  deleteOne = (id: string): void => {
    if (localStorage.getItem("cart") != null) {
      this.books = JSON.parse(localStorage.getItem("cart"));

      let index = this.books.findIndex(i => i.id == id);

      if (index > -1) {
        this.books[index].quantity--;

        if (this.books[index].quantity <= 0) {
          this.books = this.books.filter(i => i.id != id);
        }

        localStorage.setItem("cart", JSON.stringify(this.books));
      }
    } else {
      localStorage.setItem("cart", "");
    }
  };
}
