import {iPanier, Panier} from "../../panier/model/panier";

export interface iPaiement{
  idPaiement?: any;
  nature?: any;
  date?: any;
  somme_total?: any;
  panier?: any;

}

export class Paiement implements iPaiement {
  constructor(
    public idPaiement?: any,
    public nature?: any,
    public date?: any,
    public somme_total?: any,
    public panier?: any,

) {
}
}
