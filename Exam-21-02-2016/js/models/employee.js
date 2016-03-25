var app = app || {};

(function(eventsSystem) {
    function Employee(name, workHours) {
        this._name = this.setName(name);
        this._workHours = this.setWorkHours(workHours);
    }

    Employee.prototype.getName = function() {
        return this._name;
    };

    Employee.prototype.setName = function(name) {
        var regex = /[A-z ]+/g;
        if (!regex.test(name)) {
            throw new Error('Name should contain only letters and whitespace!');
        }

        this._name = name;
    };

    Employee.prototype.getWorkHours = function() {
        return this._workHours;
    };

    Employee.prototype.setWorkHours = function(workHours) {
        var regex = /[0-9]+/g;
        if (!regex.test(workHours)) {
            throw new Error('Work hours of employee should contain only digits!');
        }

        this._workHours = workHours;
    };

    eventsSystem._Employee = Employee;
    eventsSystem.employee = function(name, workHours) {
        return new Employee(name, workHours);
    }
})(app);