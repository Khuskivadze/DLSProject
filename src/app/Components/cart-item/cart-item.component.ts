import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../interaves/Iproducts";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor( public cartService:CartService) { }

  @Input() product!:IProduct

  ngOnInit(): void {
  }




}
