// rest parameters

exports.printInvoice = function(...invList) {

    for (let i = 0; i < invList.length; i++) {
        console.log(invList[i]);
    }

    // console.log(i);
};

exports.printUsingArrow = function(...invList) {

    invList.forEach(eachInvoice => console.log(eachInvoice.toString()));

}

exports.printAmount = function(...invList) {

    let amtList = invList.map(eachInvoice =>
        eachInvoice.amount);

    console.log(amtList);
}

exports.printDiscount = function(invoice, discount = .10) {

    console.log(invoice.amount * discount);
}