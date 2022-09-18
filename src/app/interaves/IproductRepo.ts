import {IProduct} from "./Iproducts";




export interface  IproductRepo {
  getProducts():  Array <IProduct>;
  getProduct(id: number): IProduct | null;
  createProduct(product: IProduct): IProduct;
  updateProduct(id: number, newProduct: IProduct): IProduct | null;
  deleteProduct(id: number): IProduct | null;
}
