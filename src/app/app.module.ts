import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {MatRadioModule} from "@angular/material/radio";
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { ListReclamationComponent } from './reclamation/list-reclamation/list-reclamation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from '@angular/material/select';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { CreateProduitComponent } from './Produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { ListProduitBackComponent } from './Produit/list-produit-back/list-produit-back.component';
import { ListProduitFrontComponent } from './Produit/list-produit-front/list-produit-front.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListStockComponent } from './stock/list-stock/list-stock.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { ListStockBackComponent } from './stock/list-stock-back/list-stock-back.component';
import { UpdateStockComponent } from './stock/update-stock/update-stock.component';
import { ProduitDetailsComponent } from './Produit/produit-details/produit-details.component';
import { SafePipe } from './safe.pipe';
import { ProduitListStockComponent } from './stock/produit-list-stock/produit-list-stock.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from 'ngx-pagination';
import {DownloadProduitComponent} from "./Produit/download-produit/download-produit.component";
import { ListPanierProduitComponent } from './panier-produit/list-panier-produit/list-panier-produit.component';
import { CreatePanierProduitComponent } from './panier-produit/create-panier-produit/create-panier-produit.component';
import { CreatePaiementComponent } from './paiement/create-paiement/create-paiement.component';
import { CreateFactureComponent } from './facture/create-facture/create-facture.component';
import { ListFactureBackComponent } from './facture/list-facture-back/list-facture-back.component';
import { DetailFactureComponent } from './facture/detail-facture/detail-facture.component';
import { ListEventComponent } from './event/list-event/list-event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { ParticiperComponent } from './participer/participer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListEventFrontComponent } from './event/list-event-front/list-event-front.component';
import { CreateCagnotteComponent } from './cagnotte/create-cagnotte/create-cagnotte.component';
import { CagnotteListBackComponent } from './cagnotte/cagnotte-list-back/cagnotte-list-back.component';
import { UpdateCagnotteComponent } from './cagnotte/update-cagnotte/update-cagnotte.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { DownloadPDFComponent } from './event/download-pdf/download-pdf.component';
import { ListAllEventsComponent } from './event/list-all-events/list-all-events.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { ListFrontCagnotteComponent } from './cagnotte/list-front-cagnotte/list-front-cagnotte.component';
import { AddSommeComponent } from './cagnotte/add-somme/add-somme.component';
import { FormLivreurComponent } from './livreur/form-livreur/form-livreur.component';
import { ListLivreurComponent } from './livreur/list-livreur/list-livreur.component';
import { UpdateLivreurComponent } from './livreur/update-livreur/update-livreur.component';
import { LivreurDetailsComponent } from './livreur/livreur-details/livreur-details.component';
import { HiringLivreurComponent } from './livreur/hiring-livreur/hiring-livreur.component';
import { AnnulercommandeComponent } from './reclamation/annulercommande/annulercommande.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormLivraisonComponent } from './livraison/form-livraison/form-livraison.component';
import { AssignLivraisonComponent } from './livreur/assign-livraison/assign-livraison.component';
import {MainLivraisonComponent} from "./livraison/main-livraison/main-livraison.component";
import {LivraisonDelaiComponent} from "./livraison/livraison-delai/livraison-delai.component";
import {LivraisonFrontComponent} from "./livraison/livraison-front/livraison-front.component";
import {MatToolbarModule} from "@angular/material/toolbar";
// @ts-ignore
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// @ts-ignore
//import {AgmCoreModule} from "@agm/core";
import { ReclamationFrontComponent } from './reclamation/reclamation-front/reclamation-front.component';
import { CreatePublicationComponent } from './publication/create-publication/create-publication.component';
import { ListPublicationComponent } from './publication/list-publication/list-publication.component';
import { UpdatePublicationComponent } from './publication/update-publication/update-publication.component';
import { ListCommentsComponent } from './publication/list-comments/list-comments.component';
import { ListPublicationAdminComponent } from './publication/list-publication-admin/list-publication-admin.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ListProduitComponent,
    CreateProduitComponent,
    UpdateProduitComponent,
    ListProduitBackComponent,
    ListProduitFrontComponent,
    ListStockComponent,
    CreateStockComponent,
    ListStockBackComponent,
    UpdateStockComponent,
    ProduitDetailsComponent,
    SafePipe,
    ProduitListStockComponent,
    DownloadProduitComponent,
    ListPanierProduitComponent,
    CreatePanierProduitComponent,
    CreatePaiementComponent,
    CreateFactureComponent,
    ListFactureBackComponent,
    DetailFactureComponent,
    ListEventComponent,
    CreateEventComponent,
    UpdateEventComponent,
    ParticiperComponent,
    ListEventFrontComponent,
    CreateCagnotteComponent,
    CagnotteListBackComponent,
    UpdateCagnotteComponent,
    SendMailComponent,
    DownloadPDFComponent,
    ListAllEventsComponent,
    EventDetailsComponent,
    ListFrontCagnotteComponent,
    AddSommeComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    ListReclamationComponent,
    FormLivreurComponent,
    ListLivreurComponent,
    UpdateLivreurComponent,
    LivreurDetailsComponent,
    HiringLivreurComponent,
    AnnulercommandeComponent,
    FormLivraisonComponent,
    AssignLivraisonComponent,
    MainLivraisonComponent,
    LivraisonDelaiComponent,
    LivraisonFrontComponent,
    ReclamationFrontComponent,
    CreatePublicationComponent,
    ListPublicationComponent,
    UpdatePublicationComponent,
    ListCommentsComponent,
    ListPublicationAdminComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatToolbarModule,
    Ng2GoogleChartsModule,
    NgxPaginationModule,
    //AgmCoreModule,
    //AgmCoreModule.forRoot({
    //  apiKey: 'AIzaSyAGYgVjHtRbXAjZYWma3JQCvebjynCraoQ'}
    //)
    Ng2OrderModule,
    NgxPaginationModule,
    MatCardModule,
    NgChartsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
