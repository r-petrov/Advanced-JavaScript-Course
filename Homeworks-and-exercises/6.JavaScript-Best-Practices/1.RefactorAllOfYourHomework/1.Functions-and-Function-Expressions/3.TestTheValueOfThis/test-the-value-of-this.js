/**
 * Created by PC on 04.02.2016 г..
 */
//"use strict";
function testContext() {
    console.log(this);
}

function outerTest(func) {
    func();
}

//call function testContext() from the global scope
//this will default to the global context or window object in the browser
//so the function shows all the properties and methods inside it
testContext();
console.log();

//call function testContest() inside another function
outerTest(testContext);
console.log();

//call function as an object
//the value of this within the scope of the function will be set to the newly created instance
var obj = new testContext();
obj;
console.log();


