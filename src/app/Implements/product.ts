import {IProduct} from "../interaves/Iproducts";

export class Product implements IProduct{
  id: number;
  img: string;
  isInCart: boolean;
  price: number;
  title: string;


  constructor(id: number, img: string, price: number, title: string, isInCart: boolean = false) {
    this.id = id;
    this.img = img;
    this.price = price;
    this.title = title;
    this.isInCart = isInCart;
  }
}
