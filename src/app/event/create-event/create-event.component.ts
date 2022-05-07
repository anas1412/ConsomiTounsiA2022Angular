import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../services/event.service';
import {MatDialogRef} from "@angular/material/dialog";
import { CagnotteService } from 'src/app/cagnotte/services/cagnotteservice';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: Event = new Event();
  idCagnotte: any;
  cagnottes: any;

  constructor(
    private service: EventService,
    private servicecagnotte: CagnotteService,
    private dialogRef: MatDialogRef<CreateEventComponent>

  ) { }

  ngOnInit(): void {
    this.servicecagnotte.findAll().subscribe((data)=>{this.cagnottes = data})
  }

  add() {
    this.service.save(this.event,this.idCagnotte).subscribe(data => this.dialogRef.close())
  }

 
}
