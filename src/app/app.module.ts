import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { AdminReclamationComponent } from './reclamation/admin-reclamation/admin-reclamation.component';
import { ListReclamationComponent } from './reclamation/list-reclamation/list-reclamation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from '@angular/material/select';
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






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    AdminReclamationComponent,
    ListReclamationComponent,
 
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
    MatDatepickerModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
