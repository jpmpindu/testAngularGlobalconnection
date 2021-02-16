import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductComponent,
    DetailProduitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
