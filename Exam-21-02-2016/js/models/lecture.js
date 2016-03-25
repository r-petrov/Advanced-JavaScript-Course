var app = app || {};

(function(eventsSystem) {
    function Lecture(options) {
        eventsSystem._Event.call(this, options);
        this._trainer = this.setTrainer (options.trainer);
        this._course = this.setCourse(options.course);
    }

    Lecture.extends(eventsSystem._Event);

    Lecture.prototype.getTrainer = function() {
        return this._trainer;
    };

    Lecture.prototype.setTrainer = function(trainer) {
        if (!(trainer instanceof Trainer)) {
            throw new Error('Invalid trainer!');
        }

        this._trainer = trainer;
    };

    Lecture.prototype.getCourse = function() {
        return this._course;
    };

    Lecture.prototype.setCourse = function(course) {
        if (!(course instanceof eventsSystem.course)) {
            throw new Error('Invalid course!');
        }

        this._course = course;
    };


    eventsSystem.lecture = function(options) {
        return new Lecture(options);
    }
})(app);