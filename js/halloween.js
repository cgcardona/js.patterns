'use strict';
var Halloween = (function () {
    function Halloween() {
    }
    Halloween.prototype.trickOrTreat = function (mode) {
        if(mode == 'trick') {
            alert('BOO!!!');
        } else {
            if(mode == 'treat') {
                console.log('goodness');
            } else {
                if(Math.random() < 0.5) {
                    this.trickOrTreat('trick');
                } else {
                    console.log('goodness');
                }
            }
        }
    };
    return Halloween;
})();
