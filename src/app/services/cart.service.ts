import { Injectable } from '@angular/core';
import {IProduct} from "../interaves/Iproducts";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private Producrts : Array<IProduct> =  new Array<IProduct>()

  constructor() { }



  addProdact(product:IProduct) : void{
     this.Producrts.push(product)
    this.calculateTotalPrice()
  }
  removeProduct(id:number) : void {
    this.Producrts = this.Producrts.filter(prod => prod.id !== id)
    this.calculateTotalPrice()
  }

  getProducts():Array<IProduct> {
    return this.Producrts;

  }

  public  totalPrice : number = 0

  private calculateTotalPrice () {
    this.totalPrice = 0;
    this.Producrts.forEach(prod => this.totalPrice += prod.price )
  }
}
