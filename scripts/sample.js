(function() {

    function test() {
        var m = 0;
        return function() {
            for (var s = 0; s < 3; s++) {
                m++;
                return m;
            }(m)
        }
    }
    var s = test();
    console.log(s());
})();