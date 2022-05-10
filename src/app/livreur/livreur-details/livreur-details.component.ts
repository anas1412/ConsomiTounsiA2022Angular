import { Component,Input, OnInit } from '@angular/core';
import {Livreur} from "../model/livreur";

@Component({
  selector: 'app-livreur-details',
  templateUrl: './livreur-details.component.html',
  styleUrls: ['./livreur-details.component.css']
})
export class LivreurDetailsComponent implements OnInit {
  @Input()
  livreur?: any ;
  searchText: any;
  // @ts-ignore
  imgURL: any;
  // @ts-ignore
  profilePicture: string = null;
  constructor() { }
  // @ts-ignore
  imageSrc: string;
  ngOnInit(): void {
  }


}
