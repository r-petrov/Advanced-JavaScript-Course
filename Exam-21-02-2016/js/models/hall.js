var app = app || {};

(function(eventsSystem) {
    function Hall(name, capacity) {
        this._name = this.setName(name);
        this._capacity = this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.addEvent = function(event) {
        if (event instanceof eventsSystem.party) {
            this.parties.push(event);
        }
        else if (event instanceof eventsSystem.lecture) {
            this.lectures.push(event);
        }
    };

    Hall.prototype.getName = function() {
        return this._name;
    };

    Hall.prototype.setName = function(name) {
        var regex = /[A-z ]+/g;
        if (!regex.test(name)) {
            throw new Error('Name should contain only letters and whitespace!');
        }

        this._name = name;
    };

    Hall.prototype.getCapacity = function() {
        return this._capacity;
    };

    Hall.prototype.setCapacity = function(capacity) {
        var regex = /[0-9]+/g;
        if (!regex.test(capacity)) {
            throw new Error('Capacity of hall should contain only digits!');
        }

        this._capacity = capacity;
    };

    eventsSystem.hall = function(name, capacity) {
        return new Hall(name, capacity);
    };
})(app);