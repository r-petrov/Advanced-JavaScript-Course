/**
 * Created by PC on 04.02.2016 г..
 */
"use strict";
function add(number) {
    var sum = number;

    function sumNumbers(num) {
        sum += num;
        return sumNumbers;
    }

    sumNumbers.toString = function() {
        return sum;
    };

    return sumNumbers;
}

//console.log(add(1).toString()); // 1
console.log(add(2)(3).toString()); // 5
console.log(add(1)(1)(1)(1)(1).toString()); // 5
console.log(add(1)(0)(-1)(-1).toString()); // -1