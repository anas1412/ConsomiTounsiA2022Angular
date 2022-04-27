export interface iPanier{
  idPanier?: number;
  user?: any;
  panier?: Panier;

}

export class Panier implements iPanier {
  constructor(
    public idPanier?: any,
    public user?: any,
    public panier?: any,

) {
}
}
