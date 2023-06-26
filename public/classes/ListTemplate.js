/*1. register a list in the constructior 2. render method: invoice/payment, heading, position */
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const paragrah = document.createElement("p");
        paragrah.innerText = item.format();
        li.append(paragrah);
        if (position === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
