"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "ID:".concat(this.id, " Name:").concat(this.name, " Salary:").concat(this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
