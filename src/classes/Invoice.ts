import {HasFormatter} from "../interfaces/HasFormatter.js"
//implements Hasformatter kollar om format returnerar string

//SHORTER CLASS FORMAT
export class InvoiceShortHand implements HasFormatter{
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){
  }
  format(){
    return `${this.client} owes me ${this.amount} SEK for ${this.details}`
  }
}

export class Invoice implements HasFormatter{
  //PUBLIC IS DEFAULT
  //readonly  is read and write, but I cannot change it.
  //private only read and change inside the class.
    readonly client: string;
    details: string;
    private amount: number;
    //need to init values otherwise errors. constructor helps me:
    constructor(c:string,d:string,a:number){
      this.client = c
      this.details = d
      this.amount = a
    }
    //method in this clasS:
    format(){
      return `${this.client} owes me ${this.amount} SEK for ${this.details}`
    }
  }

