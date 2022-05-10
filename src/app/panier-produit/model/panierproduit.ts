import {Produit} from "../../Produit/model/produit";

export interface iPanierProduit{
  idPanierProduit?: number;
  quantity?: number;
  somme?: number;
  produit?: Produit;
  user?: any;

}

export class PanierProduit implements iPanierProduit {
  constructor(
    public idPanierProduit?: number,
    public quantity?: number,
    public somme?: number,
    public produit?: Produit,
    public user?: any,

  ) {
  }
}
