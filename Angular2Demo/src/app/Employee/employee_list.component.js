"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService) {
        var _this = this;
        this._employeeService = _employeeService;
        this.selectedEmployeeRadioButtonValue = 'All';
        this.statusMessage = "Loading data.....";
        this.empolyees2 = [];
        this.empolyees = [
            { code: 'E01', name: "VVVVVV", gender: 'Male', annual_sal: 10000, dob: '19/9/1977' },
            { code: 'e05', name: 'Ansuman', gender: 'Male', annual_sal: 30000, dob: '19/1/1977' },
            { code: 'E06', name: 'Nancy', gender: 'Female', annual_sal: 60000, dob: '19/8/1977' },
            { code: 'E07', name: 'Rekha', gender: 'Female', annual_sal: 30000, dob: '19/5/1967' }
        ];
        this.empolyees3 =
            [
                { code: 'E01', name: 'Vishnu', gender: 'Male', annualSalary: 10000, dob: '19/9/1977' },
                { code: 'e01', name: 'Mayank', gender: 'Male', annualSalary: 80000, dob: '19/9/1977' },
                { code: 'e02', name: 'Ramesh', gender: 'Male', annualSalary: 90000, dob: '19/9/1977' },
                { code: 'E06', name: 'Nancy', gender: 'Female', annualSalary: 60000, dob: '19/8/1977' },
                { code: 'E07', name: 'Rekha', gender: 'Female', annualSalary: 30000, dob: '19/5/1967' }
            ];
        //this.empolyees4 = _employeeService.getEmployee()
        //Actually service is returning observable so we need to subscribe observable
        this._employeeService.getEmployee().subscribe(function (employeData) { return _this.empolyees4 = employeData; });
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Specially called for service initialization
        //Just called after constructor
        //  this.empolyeesOnInITinitaialization = this._employeeService.getEmployee()
        this.subscription = this._employeeService.getEmployee().subscribe(function (employeData) { return _this.empolyeesOnInITinitaialization = employeData; }, function (error) { _this.statusMessage = "There is some problem to loading from server"; });
    };
    EmployeeListComponent.prototype.getTotalEmployeeCountComingFromService = function () {
        return this.empolyeesOnInITinitaialization.length;
    };
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.empolyees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.empolyees.filter(function (x) { return x.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.empolyees.filter(function (x) { return x.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChangedEventListener = function (selectedRadioButtonValue) {
        console.log(this.selectedEmployeeRadioButtonValue);
        this.selectedEmployeeRadioButtonValue = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    //Canceling Request
    EmployeeListComponent.prototype.cancelRequest = function () {
        this.subscription.unsubscribe();
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'my-employeelist',
            templateUrl: 'app/employee/employee_list.component.html',
            styleUrls: ['app/employee/employee_list.component.css'],
            providers: [employee_service_1.EmployeeService] // registring service for dependency injection
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee_list.component.js.map