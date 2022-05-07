import { Component, OnInit } from '@angular/core';
import {GoogleChartInterface, GoogleChartType} from "ng2-google-charts";
import {Livraison} from "../livraison/model/livraison";
import {ILivraisonService} from "../livraison/services/livraison.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
livraison : Livraison;

adresse:string;
  constructor(private livraisonService: ILivraisonService, private router: Router) {

  }

  ngOnInit(): void {

  }
  texto : string = 'Delivery Location';
  lat: number = 33.892166;
  lng: number = 9.561555499999997;
  zoom: number = 8;


}
