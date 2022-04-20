import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierProduitRoutingModule } from './panier-produit-routing.module';
import { ListPanierProduitComponent } from './list-panier-produit/list-panier-produit.component';
import { CreatePanierProduitComponent } from './create-panier-produit/create-panier-produit.component';
import { UpdatePanierProduitComponent } from './update-panier-produit/update-panier-produit.component';


@NgModule({
  declarations: [
    ListPanierProduitComponent,
    CreatePanierProduitComponent,
    UpdatePanierProduitComponent
  ],
  imports: [
    CommonModule,
    PanierProduitRoutingModule
  ]
})
export class PanierProduitModule { }
