import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ILivreurService} from "../services/livreur.service";
import {Livreur} from "../model/livreur";

@Component({
  selector: 'app-hiring-livreur',
  templateUrl: './hiring-livreur.component.html',
  styleUrls: ['./hiring-livreur.component.css']
})
export class HiringLivreurComponent implements OnInit {
  searchText:any;
  // @ts-ignore
  Livreurs: Livreur[] = [];
  livreur: Livreur;
  // @ts-ignore
  currentLivreur:Livreur;
  popup: boolean=false;
  constructor(private livreurService: ILivreurService,private router: Router) { }

  ngOnInit(): void {

    // @ts-ignore
    this.ILivreurService.hiredLivreurs().subscribe(
      (data:Livreur[])=> this.Livreurs= data

    )
    console.log(this.Livreurs)
  }

  accepter(livreur: Livreur)
  {
    this.livreur=this.currentLivreur;
    livreur.statutCompte=true
    this.livreurService.acceptLivreur(livreur).subscribe(
      ()=>this.router.navigate(['/livreur']))

  }
}
