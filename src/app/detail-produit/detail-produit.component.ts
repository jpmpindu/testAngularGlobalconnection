import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  public products: Product[] = [];
  public product : any;


  constructor(private productService : ProductService,
              private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let productIdFromRoute = Number(routeParams.get('id'));
    this.productService.getProduct().subscribe(data => {
      this.products = data;
      this.product = this.products.find(product => product.id === productIdFromRoute);
      console.log(this.product);
    })
  }


  currentValue="";

  ModifyQuantity(val) {
   console.warn(val)
    this.product.quantity = val;
  }

}
