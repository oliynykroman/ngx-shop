export class Product {
  id: number;
  title: string;
  descr: string;
  price: number;
  count: number;

  constructor(id: number, title: string, descr: string, price: number, count:number) {
    this.id = id;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.count = count;
  }

}

