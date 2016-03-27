var app = app || {};

(function(eventsSystem) {
    function Course(name, numberOfLectures) {
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.getName = function() {
        return this._name;
    };

    Course.prototype.setName = function(name) {
        var regex = /\b[A-z ]+\b/g;
        if (!regex.test(name)) {
            throw new Error('Name should contain only letters and whitespace!');
        }

        this._name = name;
    };

    Course.prototype.getNumberOfLectures = function() {
        return this._numberOfLectures;
    };

    Course.prototype.setNumberOfLectures = function(numberOfLectures) {
        var regex = /\b[0-9]+\b/g;
        if (!regex.test(numberOfLectures)) {
            throw new Error('Number of lectures should contain only digits!');
        }

        this._numberOfLectures = numberOfLectures;
    };

    eventsSystem.course = Course;
})(app);