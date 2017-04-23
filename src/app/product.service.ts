import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  products: any;

  constructor() { 
    this.products = [
      {
        name: 'Google Pixel',
        price: 500,
        category: 'Electronics',
        description: 'Google\'s first android phone' 
      },
      {
        name: 'Apple iPhone 7',
        price: 700,
        category: 'Electronics',
        description: 'Best iPhone till date' 
      }
      ];
  }

  getProducts(){
    return this.products;
  }
  addProduct(product){
    this.products.push(product);
  }


}
