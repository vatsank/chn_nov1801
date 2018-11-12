(function() {


    console.log('inside iife');

    function usingNested() {

        var freeVariable = 'ecma'; // freevariable
        var counter = 0;

        // annonymous function is closing around freevariable
        return function() {
            //return freeVariable;
            return ++counter;
        }
    }
    var fun = usingNested();
    console.log(fun());
    console.log(fun());
    console.log(fun());

})();