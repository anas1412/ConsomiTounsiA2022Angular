import { Cagnotte } from "src/app/cagnotte/model/cagnotte";

export interface IEvent{

    idEvent?: number;
    labelle?: string;
    description?: string;
    dateDebut?: Date;
    dateFin?: Date;
    lieu?: string;
    etat?: number;
    image?: string;
    Cagnotte?: Cagnotte;
}


export class Event implements IEvent {
    constructor(
        public   idEvent?: number,
        public  labelle?: string,
        public  description?: string,
        public  dateDebut?: Date,
        public  dateFin?: Date,
        public  lieu?: string,
        public  etat?: number,
        public image?: string,
       public Cagnotte?: Cagnotte
    ) {
    }
  }