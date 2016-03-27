var app = app || {};

(function(eventsSystem) {
    function Trainer(name, workHours) {
        eventsSystem._Employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks  = [];
    }

    Trainer.extends(eventsSystem._Employee);

    Trainer.prototype.addFeedback = function(feedback) {
        if (!(typeof feedback === 'string')) {
            throw new Error('Feedback should be a string!');
        }

        this.feedbacks.push(feedback);
    };

    Trainer.prototype.addCourse = function(course) {
        if (!(course instanceof eventsSystem.course)) {
            throw new Error('Invalid course!');
        }

        this.courses.push(course);
    };

    eventsSystem.trainer = Trainer;
})(app);