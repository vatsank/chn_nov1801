var Bill = require('./Invoice');
var print = require('./InvoiceManager').printInvoice;
var arrowPrint = require('./InvoiceManager').printUsingArrow;
var amountMap = require('./InvoiceManager').printAmount;
var findDiscount = require('./InvoiceManager').printDiscount;



var firstBill = new Bill(101, 'ram', 4500);
var second = new Bill(102, 'shyam', 5500);
var third = new Bill(103, 'ganesh', 6500);

firstBill.customerName = 'ramesh';

console.log(firstBill.toString());

console.log(firstBill.customerName);

print(firstBill, second, third);

arrowPrint(firstBill, second, third);

amountMap(firstBill, second, third);

findDiscount(firstBill);

findDiscount(second, 0.5);