var app = app || {};

(function(eventsSystem){
    function Event(options) {
        if (this.constructor === Event) {
            throw new Error('Cannot instantiate an abstract class!');
        }

        this._title = this.setTitle(options.title);
        this._type = this.setType(options.type);
        this._duration = this.setDuration(options.duration);
        this._date = this.setDate(options.date);
    }

    Event.prototype.getTitle = function() {
        return this._title;
    };

    Event.prototype.setTitle = function(title) {
        var regex = /[A-z ]+/g;
        if (!regex.test(title)) {
            throw new Error('Title should contain only letters and whitespace!');
        }

        this._title = title;
    };


    Event.prototype.getType = function() {
        return this._type;
    };

    Event.prototype.setType = function(type) {
        var regex = /[A-z ]+/g;
        if (!regex.test(type)) {
            throw new Error('Type should contain only letters and whitespace!');
        }

        this._type = type;
    };

    Event.prototype.getDuration = function() {
        return this._duration;
    };

    Event.prototype.setDuration = function(duration) {
        var regex = /[0-9]+/g;
        if (!regex.test(duration)) {
            throw new Error('Duraion should contain only digits!');
        }

        this._duration = duration;
    };

    Event.prototype.getDate = function() {
        return this._date;
    };

    Event.prototype.setDate = function(date) {
        if (!(date instanceof Date)) {
            throw new Error('Invalid date!');
        }

        this._date = date;
    };

    eventsSystem._Event = Event;
    eventsSystem.event = function(options) {
        return new Event(options);
    };

})(app);