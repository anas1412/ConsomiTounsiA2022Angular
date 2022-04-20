export interface IReclamation{
   idReclamation?: number;
   DateRec?: Date;
   Description?: string;
   Type?: string;
}

export class Reclamation implements IReclamation{


  constructor(
    public idReclamation?: number,
  public   DateRec?: Date,
  public Description?: string,
  public Type?: string,
  )
  {
  }
}
