var app1 = {};

app1.show = function() {

    var subHead = document.getElementById('subHeading');

    subHead.innerHTML = 'VDSI ,Chennai';

    console.log('Hello world');

}

app1.init = function() {

    var headBtn = document.getElementById('showMajHead');

    var subHeadBtn = document.getElementById('showSubHead');

    console.log(app1.show);

    subHeadBtn.addEventListener('click', app1.show);

    headBtn.addEventListener('click', function() {

        var majHead = document.getElementById('majHeading');

        majHead.innerHTML = 'Java Script Programming';

    });
}

app1.init();