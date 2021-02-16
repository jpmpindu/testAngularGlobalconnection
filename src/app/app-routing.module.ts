import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import {DetailProduitComponent} from './detail-produit/detail-produit.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path : 'detail-product/:id', component: DetailProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
