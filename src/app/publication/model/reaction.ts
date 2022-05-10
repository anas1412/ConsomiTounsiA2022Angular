export interface Reaction{

    type?: string;

  
  
  }
  
  export class Reaction implements Reaction {
    constructor(
      public type?: string,
  
  
    ) {
    }
  }