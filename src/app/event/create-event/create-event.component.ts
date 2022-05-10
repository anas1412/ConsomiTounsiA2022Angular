import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../services/event.service';
import {MatDialogRef} from "@angular/material/dialog";
import { CagnotteService } from 'src/app/cagnotte/services/cagnotteservice';
import {TokenStorageService} from "../../_services/token-storage.service";


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: Event = new Event();
  idCagnotte: any;
  cagnottes: any;
  currentUser: any;

  constructor(
    private service: EventService,
    private servicecagnotte: CagnotteService,
    private dialogRef: MatDialogRef<CreateEventComponent>,
    private token: TokenStorageService,

  ) { }

  ngOnInit(): void {
    this.servicecagnotte.findAll().subscribe((data)=>{this.cagnottes = data})
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id);
  }

  add() {
    this.service.save(this.event,this.idCagnotte,this.currentUser.id).subscribe(data => this.dialogRef.close())
  }


}
