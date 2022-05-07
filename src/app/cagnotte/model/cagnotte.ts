
export interface ICagnotte{
idCagnotte?: number;
labelle?: string;
totalsomme?: number;
etat?: number;
dateCreation?:Date;
//event?:Event;
}

export class Cagnotte implements ICagnotte {
    constructor(
      public  idCagnotte?: number,
      public labelle?: string,
      public  totalsomme?: number,
      public  etat?: number,
     public  dateCreation?:Date,
     // public  event?:Event

        ) {
        }
    }