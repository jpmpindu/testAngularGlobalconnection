import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProduct()
      .subscribe(
        data =>
          console.log( this.products = data)
      );
  }

  total = 0;
  sort() {

    this.products.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }


  totalQuantity(){
    for (let i = 0; i < this.products.length; i++){
      if (this.products[i].quantity % 2 == 0) {
        this.total = this.total + this.products[i].quantity
        this.products[i].isEven = true;

      }else {

      }
    }
    console.log(this.total);
  }

}
