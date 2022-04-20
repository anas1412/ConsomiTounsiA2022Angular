export interface IProduit{
  idProduit?: number;
  categorieProduit?: string;
  libelleProduit?: string;
  description?: string;
  image?: string;
  prix?: number;
  dateCreation?: Date;

}




export class Produit implements IProduit {
  constructor(
    public idProduit?: number,
    public categorieProduit?: string,
    public libelleProduit?: string,
    public description?: string,
    public image?: string,
    public prix?: number,
    public dateCreation?: Date,

  ) {
  }
}
