"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var ClientCode = /** @class */ (function () {
    function ClientCode() {
        this.employees = [
            new employee_1.Employee(1001, 'RAJU', 30000),
            new employee_1.Employee(1002, 'SUNIL', 40000)
        ];
    }
    ClientCode.prototype.getEmployee = function (id) {
        for (var i in this.employees) {
            if (this.employees[i].id == id) {
                return this.employees[i];
            }
        }
        return null;
    };
    return ClientCode;
}());
var cc = new ClientCode();
console.log(cc.getEmployee(1001));
