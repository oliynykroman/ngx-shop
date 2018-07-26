export class Product {
  productTitle: string;
  productCount: number;
  productDescr: string;

  constructor(productTitle: string, productCount: number, productDescr:string) {
    this.productTitle = productTitle;
    this.productCount = productCount;
    this.productDescr = productDescr;
  }
}
