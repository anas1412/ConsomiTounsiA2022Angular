import {Produit} from "../../Produit/model/produit";
import {Panier} from "../../panier/model/panier";

export interface iPanierProduit{
  idPanierProduit?: number;
  qte?: number;
  somme?: number;
  produit?: Produit;
  panier?: Panier;

}

export class PanierProduit implements iPanierProduit {
  constructor(
    public idPanierProduit?: number,
    public qte?: number,
    public somme?: number,
    public produit?: Produit,
    public panier?: Panier,

  ) {
  }
}
