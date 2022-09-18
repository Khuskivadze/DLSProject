import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  constructor(public cartService : CartService) { }

  @Output() public close: EventEmitter<void> = new EventEmitter<void>()

  public onCloseClick() {
    this.close.emit()
  }



  ngOnInit(): void {
  }



}
