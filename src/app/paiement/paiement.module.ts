import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaiementRoutingModule } from './paiement-routing.module';
import { CreatePaiementComponent } from './create-paiement/create-paiement.component';
import { UpdatePaiementComponent } from './update-paiement/update-paiement.component';
import { DetailPaiementComponent } from './detail-paiement/detail-paiement.component';


@NgModule({
  declarations: [
    CreatePaiementComponent,
    UpdatePaiementComponent,
    DetailPaiementComponent
  ],
  imports: [
    CommonModule,
    PaiementRoutingModule
  ]
})
export class PaiementModule { }
