/**
 * Created by PC on 04.02.2016 г..
 */
"use strict";
function printArgsInfo() {
    //problem 1 solve
    for (var key in arguments) {
        var arg = arguments[key];
        var output = '';
        output += arg;
        if (arg && arg.length > 0) {
            output += ' ';
        }

        output += '(' + (Array.isArray(arg) ? 'array' : (typeof arg))  + ')';
        console.log(output);
    }
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log();
printArgsInfo(null, undefined, "", 0, [], {});
console.log();
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log();
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
console.log();
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
console.log();

//problem 2 solve
//Using call() without arguments
printArgsInfo.call(this);
console.log();

//Using call() with arguments
printArgsInfo.call(this, 1, 2, 3);
console.log();

//Using apply() without arguments
printArgsInfo.apply(this);
console.log();

//Using apply() with arguments
printArgsInfo.call(this, [1, 2, 3]);
