var Employee = /** @class */ (function () {
    function Employee(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    Employee.prototype.maiordIdade = function () {
        if (this.age > 18) {
            return true;
        }
        else {
            return false;
        }
    };
    Employee.prototype.Morada = function () {
        return "".concat(this.name, " lives at ").concat(this.address);
    };
    return Employee;
}());
var employee = new Employee('Arthur', "Bairro central", 15);
console.log(employee.Morada());
