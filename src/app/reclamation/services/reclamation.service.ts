import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Reclamation} from "../model/reclamation";
import {HttpClient} from "@angular/common/http";
import {Livraison} from "../../livraison/model/livraison";

@Injectable({
  providedIn: 'root'
})

export class IReclamationService {
  CurrentReclamation:Reclamation;
  private api_url = environment.api_url + 'Reclamation';
  constructor(private http: HttpClient) { }

  public save(reclamation: Reclamation,idUser:Number,idLivraison:Number){
    return this.http.post(this.api_url + '/add-Reclamation/'+idUser+"/"+idLivraison, reclamation);
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-Reclamations');
  }
  public update(reclamation: Reclamation){
    return this.http.put(this.api_url + '/update-Reclamation' , reclamation );
  }
  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-Reclamation/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-Reclamation/' + id);
  }
  public assign(id:Number,idReclamation:Number){

    // @ts-ignore
    return this.http.put(this.api_url + '/AssagnReclamtionToUser/'+id+'/'+idReclamation);
  }
  public traiterReclamation1(){
    // @ts-ignore
    return this.http.post(this.api_url + '/traiterReclamation1');
  }
  public traiterReclamation2(){
    // @ts-ignore
    return this.http.post(this.api_url + '/traiterReclamation2');
  }
  public traiterReclamation3(){
    // @ts-ignore
    return this.http.post(this.api_url + '/traiterReclamation3');
  }

}
