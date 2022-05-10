export interface Commentaire{
    idCommentaire?: number;
    content?: string;
    postedAt?: Date;
    updatedAt?: Date;
    user?: any;
  
  
  }
  
  export class Commentaire implements Commentaire {
    constructor(
      public idCommentaire?: number,
      public content?: string,
      public postedAt?: Date,
      public updatedAt?: Date,
      public user?: any,
  
  
    ) {
    }
  }