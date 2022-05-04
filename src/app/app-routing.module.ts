import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListProduitComponent} from "./Produit/list-produit/list-produit.component";
import {ListProduitFrontComponent} from "./Produit/list-produit-front/list-produit-front.component";
import {ListProduitBackComponent} from "./Produit/list-produit-back/list-produit-back.component";
import {ListStockComponent} from "./stock/list-stock/list-stock.component";
import {ListStockBackComponent} from "./stock/list-stock-back/list-stock-back.component";
import {ProduitDetailsComponent} from "./Produit/produit-details/produit-details.component";
import {DownloadProduitComponent} from "./Produit/download-produit/download-produit.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'produit',
    component: ListProduitComponent
  },{
    path: 'produitAll',
    component: ListProduitFrontComponent
  },{
    path: 'produitback',
    component: ListProduitBackComponent
  },{
    path: 'produitdetail',
    component: ProduitDetailsComponent
  },{
    path: 'stock',
    component: ListStockComponent
  },{
    path: 'stockback',
    component: ListStockBackComponent
  },{
    path: 'prodpdf',
    component: DownloadProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
