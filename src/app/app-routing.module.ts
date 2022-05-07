import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListReclamationComponent} from "./reclamation/list-reclamation/list-reclamation.component";

import { ListEventComponent } from './event/list-event/list-event.component';
import { CagnotteListBackComponent } from './cagnotte/cagnotte-list-back/cagnotte-list-back.component';
import { DownloadPDFComponent } from './event/download-pdf/download-pdf.component';
import { ListAllEventsComponent } from './event/list-all-events/list-all-events.component';
import { ListEventFrontComponent } from './event/list-event-front/list-event-front.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { ListFrontCagnotteComponent } from './cagnotte/list-front-cagnotte/list-front-cagnotte.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'eventfront',
    component: ListEventFrontComponent
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
  },{
    path: 'allevent',
    component: ListAllEventsComponent
  },{
    path: 'eventdetail',
    component: EventDetailsComponent
  },{
    path: 'cagnottefront',
    component: ListFrontCagnotteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
