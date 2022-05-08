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
  zoom: number = 8;
  texto : string = 'Delivery Location';
  //Tunis
  lat: number = 33.892166;
  lng: number = 9.561555499999997;
//Sfax
  lat1: number = 34.747847;
  lng1: number = 10.766163;
//Sousse
  lat2: number = 35.825603;
  lng2: number = 10.608395;
  //lE KEF
  lat3: number = 36.167965;
  lng3: number = 8.709579;
}
