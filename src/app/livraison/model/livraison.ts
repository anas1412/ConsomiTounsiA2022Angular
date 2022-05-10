export interface ILivraison{
  idLivraison?: number;
  adresse?: string;
  dateLiv?: Date;
  frais?: number;
  statusLiv?: boolean;

}

// @ts-ignore
export class Livraison implements ILivraison {

  constructor(
    public idLivraison?: number,
    public  adresse?: string,
    public dateLiv?: Date,
    public  frais?: number,
    public  statusLiv?: boolean,
  ){
  }
}
