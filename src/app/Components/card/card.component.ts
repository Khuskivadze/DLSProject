import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../interaves/Iproducts";
import {CartService} from "../../services/cart.service";
import {LocalProductsService} from "../../services/local-products.service";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() product! :IProduct

  constructor(    public  cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart (id:number) {

      this.cartService.addProdact(this.product)
  }



}
