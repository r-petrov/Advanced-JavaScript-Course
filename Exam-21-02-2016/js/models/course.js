var app = app || {};

(function(eventsSystem) {
    function Course(name, numberOfLectures) {
        this._name = this.setName(name);
        this._numberOfLectures = this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.getName = function() {
        return this._name;
    };

    Course.prototype.setName = function(name) {
        var regex = /[A-z ]+/g;
        if (!regex.test(name)) {
            throw new Error('Name should contain only letters and whitespace!');
        }

        this._name = name;
    };

    Course.prototype.getNumberOfLectures = function() {
        return this._numberOfLectures;
    };

    Course.prototype.setNumberOfLectures = function(numberOfLectures) {
        var regex = /[0-9]+/g;
        if (!regex.test(numberOfLectures)) {
            throw new Error('Number of lectures should contain only digits!');
        }
    };

    eventsSystem.course = function(options) {
        return new Course(options);
    }
})(app);