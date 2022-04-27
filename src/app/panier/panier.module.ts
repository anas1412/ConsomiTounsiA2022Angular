import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { CreatePanierComponent } from './create-panier/create-panier.component';
import { UpdatePanierComponent } from './update-panier/update-panier.component';
import { ListPanierComponent } from './list-panier/list-panier.component';
import { DetailPanierComponent } from './detail-panier/detail-panier.component';
import {PanierProduitModule} from "../panier-produit/panier-produit.module";


@NgModule({
  declarations: [
    CreatePanierComponent,
    UpdatePanierComponent,
    ListPanierComponent,
    DetailPanierComponent
  ],
  imports: [
    CommonModule,
    PanierRoutingModule,
    PanierProduitModule
  ]
})
export class PanierModule { }
