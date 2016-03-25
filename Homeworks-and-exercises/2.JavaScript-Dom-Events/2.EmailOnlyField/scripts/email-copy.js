/**
 * Created by PC on 08.02.2016 г..
 */

"use strict";
var isMatched = function isMatched(string) {
    var regex = /[\w\-]+@[A-z]+\.[\w\-]{2,5}/g;
    var isMatched = regex.test(string);

    return isMatched;
};

var changeDivBackground = function changeBackground(condition) {
    if (condition) {
        div.style.backgroundColor = '#90EE90';
    }
    else {
        div.style.backgroundColor = '#FF0000';
    }
};

var copy = function copy() {
    var input = document.getElementById('email');
    var content = input.value;
    div.textContent = content;
    var isEmail = isMatched(content);
    changeDivBackground(isEmail);
};

// Не можах да резбера защо след като се изпълни функцията и се копира съдържанието от input полето, се появява за миг
// със съответния цвят и след това изчезва!!!
var div = document.getElementById('email-copy');
var button = document.getElementById('validate');
button.addEventListener('click', copy, false);

/*
"use strict";
var isMatched = function isMatched(string) {
    var regex = /[\w\-]+@[A-z]+\.[\w\-]{2,5}/g;
    var isMatched = regex.test(string);

    return isMatched;
};

var copy = function copy() {
    var div = document.getElementById('email-copy');
    var content = document.getElementById('email').value;
    var isEmail = isMatched(content);
    if (isEmail) {
        div.style.backgroundColor = '#90EE90';
    }
    else {
        div.style.backgroundColor = '#FF0000';
    }

    div.innerText = content;
};

var button = document.getElementById('validate');
button.addEventListener('click', copy(), false);*/
