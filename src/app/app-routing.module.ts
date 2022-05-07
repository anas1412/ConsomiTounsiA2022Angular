import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListReclamationComponent} from "./reclamation/list-reclamation/list-reclamation.component";
import {ListProduitComponent} from "./Produit/list-produit/list-produit.component";
import {ListProduitFrontComponent} from "./Produit/list-produit-front/list-produit-front.component";
import {ListProduitBackComponent} from "./Produit/list-produit-back/list-produit-back.component";
import {ListStockComponent} from "./stock/list-stock/list-stock.component";
import {ListStockBackComponent} from "./stock/list-stock-back/list-stock-back.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

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
  },  {
    path: 'login',
    component: LoginComponent
  }, 
  
  { path: 'admin', component: BoardAdminComponent },

  {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  } ,
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
