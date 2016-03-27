var app = app || {};

(function(eventsSystem) {
    function Employee(name, workHours) {
        this.setName(name);
        this.setWorkHours(workHours);
    }

    Employee.prototype.getName = function() {
        return this._name;
    };

    Employee.prototype.setName = function(name) {
        var regex = /\b[A-z ]+\b/g;
        if (!regex.test(name)) {
            throw new Error('Name should contain only letters and whitespace!');
        }

        this._name = name;
    };

    Employee.prototype.getWorkhours = function() {
        return this._workHours;
    };

    Employee.prototype.setWorkHours = function(workHours) {
        var regex = /\b[0-9]+\b/g;
        if (!regex.test(workHours)) {
            throw new Error('Work hours of employee should contain only digits!');
        }

        this._workHours = workHours;
    };

    eventsSystem._Employee = Employee;
    eventsSystem.employee = Employee;
})(app);