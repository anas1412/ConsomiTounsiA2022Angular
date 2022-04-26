import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListReclamationComponent} from "./reclamation/list-reclamation/list-reclamation.component";

import { ListEventComponent } from './event/list-event/list-event.component';
import { CagnotteListBackComponent } from './cagnotte/cagnotte-list-back/cagnotte-list-back.component';
import { DownloadPDFComponent } from './event/download-pdf/download-pdf.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'reclamations',
    component: ListReclamationComponent
  }
  ,{
    path: 'eventDownload',
    component: DownloadPDFComponent
  }
  ,{
    path: 'event',
    component: ListEventComponent
  }
  ,{
    path: 'cagnotte',
    component: CagnotteListBackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
