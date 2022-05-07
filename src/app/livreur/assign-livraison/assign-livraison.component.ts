import { Component, OnInit } from '@angular/core';
import {Livraison} from "../../livraison/model/livraison";
import {ILivraisonService} from "../../livraison/services/livraison.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-assign-livraison',
  templateUrl: './assign-livraison.component.html',
  styleUrls: ['./assign-livraison.component.css']
})
export class AssignLivraisonComponent implements OnInit {
  // @ts-ignore
  livraison: Livraison;
  id:any
  idliv:any
  constructor(private livraisonService: ILivraisonService, private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    //this.livraison=this.livraisonService.currentLivreur;
    this.livraison =  new Livraison();
    this.activated.paramMap.subscribe(
      (params)=> {
        this.id = params.get('id');
        console.log("l'id du livreur est:"+this.id)

      }
    )
  }

  save()
  {
    this.livraison.statusLiv=false;
    this.livraisonService.save(this.livraison,1,this.id).subscribe(
      ()=>this.router.navigate(['/livraison']))
    this.livraisonService.assign(this.idliv,this.id)
  }
}
