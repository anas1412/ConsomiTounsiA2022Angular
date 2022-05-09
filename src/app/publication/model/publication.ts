export interface Publication{
  idPublication?: number;
  title?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  reaction?:[];



}

export class Publication implements Publication {
  constructor(
    public idPublication?: number,
    public   title?: string,
    public content?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public reaction?:[]


  ) {
  }
}
