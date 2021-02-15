import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../services/product.service'
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
}
