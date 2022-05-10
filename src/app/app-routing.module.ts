import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListProduitComponent} from "./Produit/list-produit/list-produit.component";
import {ListProduitFrontComponent} from "./Produit/list-produit-front/list-produit-front.component";
import {ListProduitBackComponent} from "./Produit/list-produit-back/list-produit-back.component";
import {ListStockComponent} from "./stock/list-stock/list-stock.component";
import {ListStockBackComponent} from "./stock/list-stock-back/list-stock-back.component";
import {ProduitDetailsComponent} from "./Produit/produit-details/produit-details.component";
import {DownloadProduitComponent} from "./Produit/download-produit/download-produit.component";
import {DetailFactureComponent} from "./facture/detail-facture/detail-facture.component";
import {ListFactureBackComponent} from "./facture/list-facture-back/list-facture-back.component";
import {DetailPaiementComponent} from "./paiement/detail-paiement/detail-paiement.component";
import {ListPanierProduitComponent} from "./panier-produit/list-panier-produit/list-panier-produit.component";
import { ListEventComponent } from './event/list-event/list-event.component';
import { CagnotteListBackComponent } from './cagnotte/cagnotte-list-back/cagnotte-list-back.component';
import { DownloadPDFComponent } from './event/download-pdf/download-pdf.component';
import { ListAllEventsComponent } from './event/list-all-events/list-all-events.component';
import { ListEventFrontComponent } from './event/list-event-front/list-event-front.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { ListFrontCagnotteComponent } from './cagnotte/list-front-cagnotte/list-front-cagnotte.component';
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
import { ListPublicationAdminComponent } from './publication/list-publication-admin/list-publication-admin.component';
import {ListPublicationComponent} from "./publication/list-publication/list-publication.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },{
    path: 'eventfront',
    component: ListEventFrontComponent
  },{
    path: 'eventDownload',
    component: DownloadPDFComponent
  },{
    path: 'event',
    component: ListEventComponent
  },{
    path: 'cagnotte',
    component: CagnotteListBackComponent
  },{
    path: 'allevent',
    component: ListAllEventsComponent
  },{
    path: 'eventdetail',
    component: EventDetailsComponent
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
    path: 'produit',
    component: ListProduitComponent
  },{
    path: 'produitAll',
    component: ListProduitFrontComponent
  },{
    path: 'produitback',
    component: ListProduitBackComponent
  },{
    path: 'produitdetail',
    component: ProduitDetailsComponent
  },{
    path: 'stock',
    component: ListStockComponent
  },{
    path: 'stockback',
    component: ListStockBackComponent
  },{
    path: 'prodpdf',
    component: DownloadProduitComponent
  },{
    path: 'detailfacture',
    component: DetailFactureComponent
  },{
    path: 'listfacture',
    component: ListFactureBackComponent
  },{
    path: 'detailpaiement',
    component: DetailPaiementComponent
  },{
  path: 'listpanierproduit',
    component: ListPanierProduitComponent
  },{
    path: 'listfactureback',
    component: ListFactureBackComponent
  },{
    path: 'cagnottefront',
    component: ListFrontCagnotteComponent
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
  },{
    path: 'publication',
    component: ListPublicationComponent
  },{
    path: 'publicationadmin',
    component: ListPublicationAdminComponent
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
