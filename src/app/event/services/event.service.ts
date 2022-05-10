import { HttpClient } from "@angular/common/http";
import { Injectable, TemplateRef } from "@angular/core";
import { environment } from "src/environments/environment";
import { Event } from "../model/event";
import { Cagnotte } from "../../cagnotte/model/cagnotte";
import {Produit} from "../../Produit/model/produit";

@Injectable({
    providedIn: 'root'
  })

  export class EventService {
    private api_url = environment.api_url + 'event';
    constructor(private http: HttpClient) { }

    public save(event: Event,cagnotteId:Number,userId:Number){
      return this.http.post(this.api_url + '/add-getEvent-user/'+cagnotteId+"/"+userId,event);
    }


    public findAll(){
      return this.http.get(this.api_url + '/getAllEventActive');
    }

    public findAllNotActive(){
      return this.http.get(this.api_url + '/getAllEvent');
    }
    public update(event: Event){
      return this.http.put(this.api_url + '/modify-event', event);
    }
    public findById(id: number){
      return this.http.get(this.api_url + '/getEvent/' + id);
    }
    public delete(id: number){
      return this.http.delete(this.api_url + '/remove-event/' + id);
    }




  }
