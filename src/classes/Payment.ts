import {HasFormatter} from "../interfaces/HasFormatter.js"
//implements Hasformatter kollar om format returnerar string

//SHORTER CLASS FORMAT
export class Payment implements HasFormatter{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){
  }
  format(){
    return `${this.recipient} gets ${this.amount} SEK for ${this.details}`
  }
}