import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { ListReclamationComponent } from './reclamation/list-reclamation/list-reclamation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from '@angular/material/select';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { FormLivreurComponent } from './livreur/form-livreur/form-livreur.component';
import { ListLivreurComponent } from './livreur/list-livreur/list-livreur.component';
import { UpdateLivreurComponent } from './livreur/update-livreur/update-livreur.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { LivreurDetailsComponent } from './livreur/livreur-details/livreur-details.component';
import { HiringLivreurComponent } from './livreur/hiring-livreur/hiring-livreur.component';
import { AnnulercommandeComponent } from './reclamation/annulercommande/annulercommande.component';
import {MatRadioModule} from "@angular/material/radio";
import { FormLivraisonComponent } from './livraison/form-livraison/form-livraison.component';
import { AssignLivraisonComponent } from './livreur/assign-livraison/assign-livraison.component';
import {MainLivraisonComponent} from "./livraison/main-livraison/main-livraison.component";
import {LivraisonDelaiComponent} from "./livraison/livraison-delai/livraison-delai.component";
import {LivraisonFrontComponent} from "./livraison/livraison-front/livraison-front.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {AgmCoreModule} from "@agm/core";
import { ReclamationFrontComponent } from './reclamation/reclamation-front/reclamation-front.component';






// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
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
    AppComponent,
    ReclamationFrontComponent,







  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        HttpClientModule,
        MatSelectModule,
        Ng2SearchPipeModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatToolbarModule,
        Ng2GoogleChartsModule,
        AgmCoreModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAGYgVjHtRbXAjZYWma3JQCvebjynCraoQ'
      }),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
