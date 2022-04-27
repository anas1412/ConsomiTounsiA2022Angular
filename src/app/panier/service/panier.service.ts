import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Panier} from "../model/panier";


@Injectable({
  providedIn: 'root'
})
export class IPanierServices {
  private api_url = environment.api_url + 'panier';
  constructor(private http: HttpClient) {
  }

  public save(panier: Panier,userId:Number){
    return this.http.post(this.api_url + '/add-panier/'+userId, panier);
  }

  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-panier');
  }

  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-panier/' + id);
  }

  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-panier/' + id);
  }

  public addToPanier(panier: Panier,ppId:Number){
    return this.http.post(this.api_url + '/add-to-panier/'+ ppId, panier);
  }

  public removeFromPanier(id: number, ppId: number){
    return this.http.delete(this.api_url + '/remove-from-panier/' + id + '/' + ppId);
  }


}
