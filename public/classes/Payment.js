//implements Hasformatter kollar om format returnerar string
//SHORTER CLASS FORMAT
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} gets ${this.amount} SEK for ${this.details}`;
    }
}
