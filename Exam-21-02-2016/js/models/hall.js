var app = app || {};

(function(eventsSystem) {
    function Hall(name, capacity) {
        this.setName(name);
        this.setCapacity(capacity);
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
        else {
            throw new Error('Invalid event');
        }
    };

    Hall.prototype.getName = function() {
        return this._name;
    };

    Hall.prototype.setName = function(name) {
        var regex = /\b[A-z ]+\b/g;
        if (!regex.test(name)) {
            throw new Error('Name should contain only letters and whitespace!');
        }

        this._name = name;
    };

    Hall.prototype.getCapacity = function() {
        return this._capacity;
    };

    Hall.prototype.setCapacity = function(capacity) {
        var regex = /\b[0-9]+\b/g;
        if (!regex.test(capacity)) {
            throw new Error('Capacity of hall should contain only digits!');
        }

        this._capacity = capacity;
    };

    eventsSystem.hall = Hall;
})(app);