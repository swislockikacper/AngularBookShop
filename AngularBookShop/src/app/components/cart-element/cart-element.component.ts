import { Component, OnInit, Input } from "@angular/core";
import { CartDisplay } from "src/app/models/cart-display";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "cart-element",
  templateUrl: "./cart-element.component.html",
  styleUrls: ["./cart-element.component.scss"]
})
export class CartElementComponent implements OnInit {
  @Input() cartElement: CartDisplay;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addOneMore = (): void => {
    this.cartService.addToCart(this.cartElement.id);
    this.cartElement.quantity++;
  };

  deleteOne = (): CartDisplay =>
    (this.cartElement = this.cartService.deleteOne(this.cartElement));
}
