/**
 * Created by PC on 13.02.2016 г..
 */
"use strict";
String.prototype.startsWith = function startsWith(substring) {
    var string = this,
        startsWithSubstring = false;
    if (string.indexOf(substring) === 0) {
        startsWithSubstring = true;
    }

    return startsWithSubstring;
};


String.prototype.endsWith = function endsWith(substring) {
    var strings = this.split(' '),
        string = strings[strings.length - 1],
        endsWithSubstring = false;
    if (string.lastIndexOf(substring) >= 0) {
        endsWithSubstring = true;
    }

    return endsWithSubstring;
};


String.prototype.left = function left(count) {
    var string = this,
        stringLength = string.length,
        output = '',
        char;
    if (count >= stringLength) {
        return string;
    }

    for (var index = 0; index < count; index++) {
        char = string[index];
        output += char;
    }

    return output;
};


String.prototype.right = function right(count) {
    var string = this,
        stringLength = string.length,
        output = '',
        char;
    if (count >= stringLength) {
        return string;
    }

    for (var index = stringLength - count; index < stringLength; index++) {
        char = string[index];
        output += char;
    }

    return output;
};


String.prototype.padLeft = function padLeft(count, character) {
    var string = this,
        output = '';
    if (character === undefined) {
        character = ' ';
    }

    for (var i = 0; i < count; i++) {
        output += character;
    }

    output += string;

    return output;
};


String.prototype.padRight = function padRight(count, character) {
    var string = this,
        output = '';

    output += string;
    if (character === undefined) {
        character = ' ';
    }

    for (var i = 0; i < count; i++) {
        output += character;
    }

    return output;
};


String.prototype.repeat = function repeat(count) {
    var string = this,
        output = '';
    for (var index = 0; index < count; index++) {
        output += string;
    }

    return output;
};


/*var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log();*/


/*var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));
console.log();*/


/*var example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));
console.log();*/


/*var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));
console.log();*/


/*// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));
console.log();*/


/*var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));
console.log();*/


/*var hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));
console.log();*/

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
console.log();

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));

