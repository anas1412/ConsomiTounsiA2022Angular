export interface IReclamation{
   idReclamation?: number;
   dateRec?: Date;
   description?: string;
   type?: string;
  mail?: string;
}

export class Reclamation implements IReclamation{
  [x: string]: any;

  // @ts-ignore
  constructor(public idReclamation?: number, public dateRec?: Date, public description?: string, public type?: string,mail?: string,)

}
