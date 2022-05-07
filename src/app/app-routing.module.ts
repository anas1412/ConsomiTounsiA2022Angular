import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { ListLivreurComponent } from './livreur/list-livreur/list-livreur.component';
import {ListReclamationComponent} from "./reclamation/list-reclamation/list-reclamation.component";
import {LivreurDetailsComponent} from "./livreur/livreur-details/livreur-details.component";
import {HiringLivreurComponent} from "./livreur/hiring-livreur/hiring-livreur.component";
import {AnnulercommandeComponent} from "./reclamation/annulercommande/annulercommande.component";
import {AssignLivraisonComponent} from "./livreur/assign-livraison/assign-livraison.component";
import {MainLivraisonComponent} from "./livraison/main-livraison/main-livraison.component";
import {FormLivraisonComponent} from "./livraison/form-livraison/form-livraison.component";
import {LivraisonDelaiComponent} from "./livraison/livraison-delai/livraison-delai.component";
import {LivraisonFrontComponent} from "./livraison/livraison-front/livraison-front.component";
import {ReclamationFrontComponent} from "./reclamation/reclamation-front/reclamation-front.component";





const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'reclamation',
    component: ListReclamationComponent
  },{
    path: 'livreur',
    component: ListLivreurComponent
  },{
    path: 'livreurdetail',
    component: LivreurDetailsComponent
  },{
  path:'recruter',
  component: HiringLivreurComponent
  },{
    path: 'annulercommande',
    component: AnnulercommandeComponent
  },{
  path:'assign-livraison/:id',
    component: AssignLivraisonComponent
}, {
  path:'livraison',
    component: MainLivraisonComponent
  }, {
    path:'add-livraison',
    component: FormLivraisonComponent
},{
    path:'delai-livraison',
    component: LivraisonDelaiComponent
  },{
    path:'front-livraison',
    component: LivraisonFrontComponent
  },{
    path: 'front-reclamation',
    component: ReclamationFrontComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
