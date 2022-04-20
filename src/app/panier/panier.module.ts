import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { CreatePanierComponent } from './create-panier/create-panier.component';
import { UpdatePanierComponent } from './update-panier/update-panier.component';
import { ListPanierComponent } from './list-panier/list-panier.component';


@NgModule({
  declarations: [
    CreatePanierComponent,
    UpdatePanierComponent,
    ListPanierComponent
  ],
  imports: [
    CommonModule,
    PanierRoutingModule
  ]
})
export class PanierModule { }
