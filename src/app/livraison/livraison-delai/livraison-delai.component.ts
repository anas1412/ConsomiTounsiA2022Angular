import {Component, OnInit, PipeTransform} from '@angular/core';
import {Livraison} from "../../livraison/model/livraison";
import {ILivraisonService} from "../services/livraison.service";

@Component({
  selector: 'app-livraison-delai',
  templateUrl: './livraison-delai.component.html',
  styleUrls: ['./livraison-delai.component.css']
})

export class LivraisonDelaiComponent implements OnInit {
  livraisons: Livraison[] = [];
  searchText:any;
  constructor(private service: ILivraisonService) {

  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.livraisons =data;
    })

  }

}
