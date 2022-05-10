import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import {MatDialog} from "@angular/material/dialog";

import { Event } from '../model/event';
import { CreateEventComponent } from '../create-event/create-event.component';
import { SendMailComponent } from 'src/app/send-mail/send-mail.component';

@Component({
  selector: 'app-list-event-front',
  templateUrl: './list-event-front.component.html',
  styleUrls: ['./list-event-front.component.css']
})
export class ListEventFrontComponent implements OnInit {
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

 

  


  Onpopup(event: Event){
    this.eventdetail = event;
    this.popup = true;
  }
  

}
