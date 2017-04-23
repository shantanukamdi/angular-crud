import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: any;

  constructor(private _productService: ProductService, private dialog: MdDialog){
   this.products = this._productService.getProducts();
  }

  openModal(){
    this.dialog.open(Dialog);
  }
}


@Component({
  selector: 'form-dialog',
  template: `
    <h3 md-dialog-title>Add Product</h3>
    <md-dialog-content>
        <form>
          <md-input-container>
            <input mdInput placeholder="Name" [(ngModel)] = "product.name" [ngModelOptions]="{standalone: true}"> 
          </md-input-container>
          <md-input-container>
            <input mdInput placeholder="Price" [(ngModel)] = "product.price" [ngModelOptions]="{standalone: true}"> 
         </md-input-container>
         <md-select placeholder="Categories" floatPlaceholder="never" [(ngModel)] ="product.category" [ngModelOptions]="{standalone: true}" >
            <md-option *ngFor="let c of categories" [value]="c.value" >
              {{ c.viewValue }}
            </md-option>
         </md-select><br>
         <md-input-container>
          <textarea mdInput placeholder="Description" width="10" height="30"[(ngModel)] = "product.description" [ngModelOptions]="{standalone: true}">  
          </textarea>
         </md-input-container>
         </form>
    </md-dialog-content>

    <md-dialog-actions>
      <button md-button (click)="addProduct(product);">Add</button>&nbsp;
      <button md-button (click)="closeDialog();">Cancel</button>
    </md-dialog-actions>

  `
})
export class Dialog{
  categories= [
    {
      value: 'electornics', 
      viewValue: 'Electronics'
    },
    {
      value: 'furniture', 
      viewValue: 'Furniture'
    },
    {
      value: 'automobiles', 
      viewValue: 'Automobiles'
    }
  ];
  product= {
    name: '',
    price: '',
    category: '',
    description: ''
  };
  constructor(private _productService: ProductService, private dialog: MdDialog){

  }
  addProduct(product){
    this._productService.addProduct(product);
    this.dialog.closeAll();
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}