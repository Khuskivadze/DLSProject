import { Component } from '@angular/core';
import {LocalProductsService} from "../../services/local-products.service";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DlSProject';

  public isCartOpen: boolean = false;

  constructor( public localProductService: LocalProductsService, public  cartService:CartService) {
  }



  public openCart() {
    this.isCartOpen = true;

  }

  public closeCart() {
    this.isCartOpen = false;

  }


}
