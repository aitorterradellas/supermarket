export class Product {
  id: number;
  title: string;
  type: string;
  description: string;
  filename: string;
  height: number;
  width: number;
  price: number;
  rating: number;

  map(product: Product, id: number) {
    this.id = id;
    this.title = product.title;
    this.type = product.type;
    this.description = product.description;
    this.filename = product.filename;
    this.height = product.height;
    this.width = product.width;
    this.price = product.price;
    this.rating = product.rating;
  }

  constructor() {

  }
}
