(function() {


    var Book = function(bookNumber, bookName, price) {

        this.bookNumber = bookNumber;
        this.bookName = bookName;
        this.price = price;

    }

    Book.prototype.discount = function() {

        return this.price * .10;
    }


    var javaBook = new Book(101, 'headFirst', 450);
    var ngBook = new Book(102, 'Mastering Angular', 1250);

    var bookList = [javaBook, ngBook];


    bookList.forEach(function(eachItem, idx) {

        console.log(eachItem.discount());
    })

})();