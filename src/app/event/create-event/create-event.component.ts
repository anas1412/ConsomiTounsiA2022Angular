import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../services/event.service';
import {MatDialogRef} from "@angular/material/dialog";
import { Cagnotte } from '../../cagnotte/model/cagnotte';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: Event = new Event();

  constructor(
    private service: EventService,
    private dialogRef: MatDialogRef<CreateEventComponent>

  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.event, Cagnotte).subscribe(data => this.dialogRef.close())
  }

}
