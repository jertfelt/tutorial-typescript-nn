//implements Hasformatter kollar om format returnerar string
//SHORTER CLASS FORMAT
export class InvoiceShortHand {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes me ${this.amount} SEK for ${this.details}`;
    }
}
export class Invoice {
    //need to init values otherwise errors. constructor helps me:
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //method in this clasS:
    format() {
        return `${this.client} owes me ${this.amount} SEK for ${this.details}`;
    }
}
