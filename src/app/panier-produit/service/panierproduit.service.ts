import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PanierProduit} from "../model/panierproduit";


@Injectable({
  providedIn: 'root'
})
export class IPanierProduitServices {
  private api_url = environment.api_url + 'panierproduit';
  constructor(private http: HttpClient) { }

  public save(panierproduit: PanierProduit,produitId:Number){
    return this.http.post(this.api_url + '/add-panierproduit/'+produitId, panierproduit);
  }

  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-panierproduit');
  }

  public update(panierproduit: PanierProduit){
    return this.http.put(this.api_url + '/update-panierproduit', panierproduit);
  }

  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-panierproduit/' + id);
  }

  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-panierproduit/' + id);
  }


}

