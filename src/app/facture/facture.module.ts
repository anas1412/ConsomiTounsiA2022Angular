import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { ListFactureBackComponent } from './list-facture-back/list-facture-back.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';


@NgModule({
  declarations: [
    CreateFactureComponent,
    UpdateFactureComponent,
    ListFactureBackComponent,
    DetailFactureComponent
  ],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
