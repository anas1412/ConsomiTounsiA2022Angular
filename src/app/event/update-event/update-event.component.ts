import { Component, Inject, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Event } from '../model/event';
import { CagnotteService } from 'src/app/cagnotte/services/cagnotteservice';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  event: Event = new Event();
  idCagnotte: any;
  cagnottes: any;

  constructor(
    private service: EventService,
    private servicecagnotte: CagnotteService,
    private dialogRef: MatDialogRef<UpdateEventComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any

  ) { }

  ngOnInit(): void {

    this.service.findById(this.data.id).subscribe(response => {
      this.event= response;
    })
    this.servicecagnotte.findAll().subscribe((data)=>{this.cagnottes = data})
  }

  update() {
    this.service.update(this.event).subscribe(r => this.dialogRef.close())
  }

}
