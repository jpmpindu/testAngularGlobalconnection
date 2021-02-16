import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "/assets/data/products.json"

  constructor(private http: HttpClient) { }

  getProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }
}
