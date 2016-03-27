var app = app || {};

(function(eventsSystem){
    function Event(options) {
        if (this.constructor === Event) {
            throw new Error('Cannot instantiate an abstract class!');
        }

        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }

    Event.prototype.getTitle = function() {
        return this._title;
    };

    Event.prototype.setTitle = function(title) {
        var regex = /\b[A-z ]+\b/g;
        if (!regex.test(title)) {
            throw new Error('Title should contain only letters and whitespace!');
        }

        this._title = title;
    };


    Event.prototype.getType = function() {
        return this._type;
    };

    Event.prototype.setType = function(type) {
        var regex = /\b[A-z ]+\b/g;
        if (!regex.test(type)) {
            throw new Error('Type should contain only letters and whitespace!');
        }

        this._type = type;
    };

    Event.prototype.getDuration = function() {
        return this._duration;
    };

    Event.prototype.setDuration = function(duration) {
        var regex = /\b[0-9]+\b/g;
        if (!regex.test(duration)) {
            throw new Error('Duration should contain only digits!');
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
    eventsSystem.event = Event;

})(app);