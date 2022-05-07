import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Livraison} from "../model/livraison";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ILivraisonService {
  // @ts-ignore
  CurrentLivraison:Livraison;
  idFacture:any;
  private api_url = environment.api_url + 'Livraison';
  constructor(private http: HttpClient) { }

  public save(livraison: Livraison,idFacture:Number,idLivreur:Number){
    return this.http.post(this.api_url + '/add-Livraison/'+idFacture+"/"+idLivreur, livraison);
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-Livraisons');
  }
  public update(livraison: Livraison){
    return this.http.put(this.api_url + '/update-Livraison' ,livraison );
  }
  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-Livraison/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-Livraison/' + id);
  }
  public assign(idLivraison: Number,idLivreur: Number){

    // @ts-ignore
    return this.http.put(this.api_url + '/AssagnLivraisonToLivreur/'+idLivraison+'/'+idLivreur);
  }
 public count()
  {
    let lvr=this.http.get<Livraison>(this.api_url+"/retrieve-all-livraisons");
    console.log(lvr)
    return lvr
  }
  public CountDelievered(){
    let x1= this.http.get(this.api_url+"/count-delivered")
    return x1
  }
 public CountUndelievered(){
    let x2= this.http.get(this.api_url+"/count-undelivered")
    return x2
  }
  public deliverLivraison(id: number){
    // @ts-ignore
    return this.http.put(this.api_url + '/deliver-livraison/' + id);
  }

}
