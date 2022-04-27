import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Paiement} from "../model/paiement";


@Injectable({
  providedIn: 'root'
})
export class IPaiementServices {
  private api_url = environment.api_url + 'paiement';
  constructor(private http: HttpClient) { }

  public save(paiement: Paiement,panierId:Number){
    return this.http.post(this.api_url + '/add-paiement/'+panierId, paiement);
  }

  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-paiement');
  }

  public update(paiement: Paiement){
    return this.http.put(this.api_url + '/update-paiement', paiement);
  }

  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-paiement/' + id);
  }

  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-paiement/' + id);
  }


}

