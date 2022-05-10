import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Livreur} from "../model/livreur";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ILivreurService {

  private api_url = environment.api_url + 'Livreur';
  constructor(private http: HttpClient) { }

  public save(livreur: Livreur){
    return this.http.post(this.api_url + '/add-Livreur/',livreur);
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-Livreurs');
  }
  public update(livreur: Livreur){
    return this.http.put(this.api_url + '/update-Livreur' ,livreur );
  }
  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-Livreur/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-Livreur/' + id);
  }
  public acceptLivreur(livreur: Livreur){
    return this.http.put(this.api_url + '/accept-Livreur/' ,livreur);
  }
  public assign(idLivraison: Number,idLivreur: Number){

    // @ts-ignore
    return this.http.put(this.api_url + '/AssagnLivraisonToLivreur/'+idLivraison+'/'+idLivreur);
  }
}
