import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../interaves/Iproducts";


@Component({
  selector: 'app-card-add-btn',
  templateUrl: './card-add-btn.component.html',
  styleUrls: ['./card-add-btn.component.scss']
})
export class CardAddBtnComponent implements OnInit {

  constructor() { }

  @Input() product! :IProduct

  ngOnInit(): void {
  }

}
