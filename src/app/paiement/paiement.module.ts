import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaiementRoutingModule } from './paiement-routing.module';
import { CreatePaiementComponent } from './create-paiement/create-paiement.component';
import { UpdatePaiementComponent } from './update-paiement/update-paiement.component';


@NgModule({
  declarations: [
    CreatePaiementComponent,
    UpdatePaiementComponent
  ],
  imports: [
    CommonModule,
    PaiementRoutingModule
  ]
})
export class PaiementModule { }
