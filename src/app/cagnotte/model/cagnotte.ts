
export interface ICagnotte{
idCagnotte?: number;
Labelle?: string;
TotalSomme?: number;
etat?: number;
//event?:Event
}

export class Cagnotte implements ICagnotte {
    constructor(
      public  idCagnotte?: number,
      public Labelle?: string,
      public  TotalSomme?: number,
      public  etat?: number,
     // public  event?:Event

        ) {
        }
    }