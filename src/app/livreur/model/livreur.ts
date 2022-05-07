import {Livraison} from "../../livraison/model/livraison";

export interface ILivreur{
  idLivreur?: number;
  nom?: string;
  prenom?: string;
  ville?: string;
  statutCompte?: boolean;
  telephone?: number;
  dateAjout?: Date;
  nbLivraison?: number;
  adresseEmail?: string;
  mdp?: string;
  // @ts-ignore
  imgURL?:string;
  message?:string;
  listlivraison: Livraison[]
}

// @ts-ignore
export class Livreur implements ILivreur {


  constructor(
    public idLivreur?: number,
    public  nom?: string,
    public  prenom?: string,
    public  ville?: string,
    public  statutCompte?: boolean,
    public  telephone?: number,
    public dateAjout?: Date,
    public  nbLivraison?: number,
    public adresseEmail?: string,
    public mdp?: string,
    public imgURL?:string,
    public message?:string,
){
  }
}


