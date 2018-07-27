export class Product {
  productTitle: string;
  productCount: number;
  productDescr: string;
  productPrice: number;

  constructor(productTitle: string, productCount: number, productDescr:string, productPrice:number) {
    this.productTitle = productTitle;
    this.productCount = productCount;
    this.productDescr = productDescr;
    this.productPrice = productPrice;
  }
}
