import { Injectable } from '@angular/core';
import {IproductRepo} from "../interaves/IproductRepo";
import {Product} from "../Implements/product";
import {IProduct} from "../interaves/Iproducts";

@Injectable({
  providedIn: 'root'
})
export class LocalProductsService implements IproductRepo{


  private Products: Array<IProduct> = [
    new Product(0, "https://media-exp1.licdn.com/dms/image/C5612AQFr1SsmEc9Gpg/article-cover_image-shrink_720_1280/0/1650087668037?e=2147483647&v=beta&t=X1eQcKioTUE6hz4g8YQxubZueh4RwAmt34xUxIbSTpA", 3500, " 8GB  RX 550 4GB 240GB  500GB  500 Watt"),
    new Product(1, "https://cdn.shopify.com/s/files/1/0061/7594/8882/products/SY-PCBuild-PinkOdysseyAirflow.png?v=1658745133", 2500, "8GB  RX 550 4GB 240GB  500GB  800 Watt"),
    new Product(2, "https://www.geekawhat.com/wp-content/uploads/2022/05/H7-Flow-Steves-Build-Feature-Image.jpg", 3000, "8GB  RX 550 4GB 240GB  500GB  900 Watt"),
    new Product(3, "https://media.wired.com/photos/624df21cb340f55b37084fdc/4:3/w_1796,h_1347,c_limit/How-to-Build-a-PC-Gear.jpg", 5000, "8GB  RX 550 4GB 240GB  500GB  900 Watt"),
    new Product(4, "https://thesmartlocal.com/wp-content/uploads/2021/04/pc-build-ideas-3.jpg", 4000, "8GB  RX 550 4GB 240GB  500GB  500 Watt"),
  ]

  constructor() { }

  createProduct(product: IProduct): IProduct {
    this.Products.push(product)
    return product;
  }

  deleteProduct(id: number): IProduct | null {
    const foundProduct: IProduct | null = this.getProduct(id);
    if (foundProduct === null)
      return null;

    this.Products = this.Products.filter(prod => prod.id !== id)
    return foundProduct;
  }

  getProduct(id: number): IProduct | null {
    const prod = this.Products.find(prod => prod.id === id);
    return prod === undefined ? null : prod;
  }

  getProducts(): Array<IProduct> {
   return this.Products
  }

  updateProduct(id: number, newProduct: IProduct): IProduct | null {
    const foundProduct: number = this.Products.findIndex(prod => prod.id === id)
    if (foundProduct === -1)
      return null;

    this.Products[foundProduct] = newProduct
    return newProduct;
  }


}








