class Invoice {

    constructor(invoiceNumber, customerName, amount) {
        this.invoiceNumber = invoiceNumber;
        this._customerName = customerName;
        this.amount = amount;
    }

    set customerName(customerName) {

        if (customerName.length < 5) {
            throw Error('Name should be great than 5 chars')
        } else {
            this._customerName = customerName;
        }
    }

    get customerName() {

        return this._customerName.toUpperCase();
    }
    toString() {
        return this.customerName + ',' + this.amount;
    }
}

module.exports = Invoice;