/**
 * Created by PC on 13.02.2016 г..
 */
"use strict";
var Person = (function() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        Object.defineProperty(this, 'fullName', {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(name) {
                var names = name.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        })
        return this;
    }

    return Person;
})();

var person = new Person("Peter", "Jackson");

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

