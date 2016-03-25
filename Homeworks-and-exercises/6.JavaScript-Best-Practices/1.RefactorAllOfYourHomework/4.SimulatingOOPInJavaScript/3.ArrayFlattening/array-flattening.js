/**
 * Created by PC on 13.02.2016 г..
 */
"use strict";
Array.prototype.outputArray = [];
Array.prototype.flatten = function flatten() {
    //var hasArrayElements = false;
    var array = this;
    var length = array.length;
    for (var index = 0; index < length; index++) {
        var element = array[index];
        if (!(Object.prototype.toString.call(element) === '[object Array]')) {
            this.outputArray.push(element);
        }
        else {
            flatten.call(element);
        }
    }

    return this.outputArray;
};
/*
var array = [1, 2, 3, 4];
console.log(array.flatten());
*/

/*var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed
*/

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
