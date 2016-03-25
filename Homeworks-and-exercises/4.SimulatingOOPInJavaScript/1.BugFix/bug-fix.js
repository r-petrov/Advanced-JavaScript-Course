/**
 * Created by PC on 13.02.2016 г..
 */
"use strict";
/*if (!Object.create) {
    Object.create = function (proto) {
        function F() {
        }
        F.prototype = proto;
        return new F();
    };
}

Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};*/

var Person = (function() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._name = this.firstName + " " + this.lastName;
        return this;
    }

    return Person;
})();

var peter = new Person("Peter", "Jackson");
console.log(peter._name);
console.log(peter.firstName);
console.log(peter.lastName);
