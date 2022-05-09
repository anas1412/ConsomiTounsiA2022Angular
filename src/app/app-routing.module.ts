import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { ListPublicationAdminComponent } from './publication/list-publication-admin/list-publication-admin.component';
import {ListPublicationComponent} from "./publication/list-publication/list-publication.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'publication',
    component: ListPublicationComponent
  },{
    path: 'publicationadmin',
    component: ListPublicationAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
