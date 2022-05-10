import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDatepicker} from "@angular/material/datepicker";
import { EventService } from '../services/event.service';
import { Event } from '../model/event';

import{CreateEventComponent} from "../create-event/create-event.component";
import{UpdateEventComponent} from "../update-event/update-event.component";
import { ParticiperComponent } from 'src/app/participer/participer.component';
import { SendMailComponent } from 'src/app/send-mail/send-mail.component';




@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  events: Event[] = [];
  popup: boolean=false;
  eventdetail?: Event;
  constructor(
    private dialog: MatDialog,
    private service: EventService
  ) { }

  ngOnInit(): void {

    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.events = data;
    })
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(CreateEventComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(UpdateEventComponent, {
      width: '400px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  supprimer(id: any) {
   
    if (confirm('voulez vous vraiment supprimer ?')) {
      this.service.delete(id).subscribe(r => this.ngOnInit());
    }
  }

  participer(){
    const dialogRef = this.dialog.open(SendMailComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  Onpopup(event: Event){
    this.eventdetail = event;
    this.popup = true;
  }
}
