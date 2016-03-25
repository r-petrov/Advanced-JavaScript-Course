/**
 * Created by PC on 13.02.2016 г..
 */
"use strict";
/*Person.watch('fullName', function() {
 var names = this.fullName.split(' ');
 this.firstName = names[0];
 this.lastName = names[1];
 });*/

/*// object.watch
if (!Object.prototype.watch) {
    Object.prototype.watch = function (prop, handler) {
        var oldval = this[prop],
            newval = oldval,
            getter = function () {
                return newval;
            },
            setter = function (val) {
                oldval = newval;
                return newval = handler.call(this, prop, oldval, val);
            };
        if (delete this[prop]) { // can't watch constants
            if (Object.defineProperty) // ECMAScript 5
                Object.defineProperty(this, prop, {
                    get: getter,
                    set: setter
                });
            else if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) { // legacy
                Object.prototype.__defineGetter__.call(this, prop, getter);
                Object.prototype.__defineSetter__.call(this, prop, setter);
            }
        }
    };
}*/

var Person = (function() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
        return this;
    }



    Person.prototype.updateNames = function updateNames(fullName, oldval, newval) {
        var names = newval.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    };


    return Person;
})();


var person = new Person("Peter", "Jackson");
Person.watch('fullName', function(id, oldval, newval) {
        var names = newval.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    console.log('property ' + id + ' changed from ' + oldval + ' to ' + newval);
});

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

