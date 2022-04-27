import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListReclamationComponent} from "./reclamation/list-reclamation/list-reclamation.component";
import {ListProduitComponent} from "./Produit/list-produit/list-produit.component";
import {ListProduitFrontComponent} from "./Produit/list-produit-front/list-produit-front.component";
import {ListProduitBackComponent} from "./Produit/list-produit-back/list-produit-back.component";
import {ListStockComponent} from "./stock/list-stock/list-stock.component";
import {ListStockBackComponent} from "./stock/list-stock-back/list-stock-back.component";
import {DetailFactureComponent} from "./facture/detail-facture/detail-facture.component";
import {ListFactureBackComponent} from "./facture/list-facture-back/list-facture-back.component";
import {DetailPaiementComponent} from "./paiement/detail-paiement/detail-paiement.component";
import {DetailPanierComponent} from "./panier/detail-panier/detail-panier.component";
import {ListPanierProduitComponent} from "./panier-produit/list-panier-produit/list-panier-produit.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'reclamations',
    component: ListReclamationComponent
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
    path: 'stock',
    component: ListStockComponent
  },{
    path: 'stockback',
    component: ListStockBackComponent
  },{
    path: 'detailfacture',
    component: DetailFactureComponent
  },{
    path: 'listfacture',
    component: ListFactureBackComponent
  },{
    path: 'detailpaiement',
    component: DetailPaiementComponent
  },{
  path: 'detailpanier',
    component: DetailPanierComponent
  },{
  path: 'listpanierproduit',
    component: ListPanierProduitComponent
  },{
    path: 'listfactureback',
    component: ListFactureBackComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
