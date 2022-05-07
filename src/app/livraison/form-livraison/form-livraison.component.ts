import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ILivraisonService} from "../services/livraison.service";
import {Livraison} from "../model/livraison";

@Component({
  selector: 'app-form-livraison',
  templateUrl: './form-livraison.component.html',
  styleUrls: ['./form-livraison.component.css']
})
export class FormLivraisonComponent implements OnInit {
  livreurs: any;
  idLivreur: any;
  // @ts-ignore
  livraison: Livraison;
  // @ts-ignore
  status: boolean

  id:any
  ngOnInit(): void {
// @ts-ignore
    this.status=this.livraison.statusLiv;
    if (this.livraison.idLivraison){
      this.livraison =  this.livraisonService.CurrentLivraison;
    }else {
      this.livraison =  new Livraison();
    }
  }
  constructor(private livraisonService: ILivraisonService,public router: Router) { }

  save() {

    if (this.status){
      this.livraison.statusLiv=false;
      this.livraisonService.update(this.livraison).subscribe(
        ()=>this.router.navigate(['/livraison'])
      )
    }
    else {

      this.livraison.statusLiv=false;
      this.livraisonService.save(this.livraison,1,this.id).subscribe(
        ()=>this.router.navigate(['/livraison'])
      )
    }

    }


  return()
  {
    this.router.navigate(['/livraison'])

  }

}
