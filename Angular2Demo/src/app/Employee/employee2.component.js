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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var userPreferences_service_1 = require("./userPreferences.service");
require("rxjs/add/operator/retry");
var EmployeeComponent2 = /** @class */ (function () {
    function EmployeeComponent2(_employeeService, _activatedRoute, _userPreferencesService, _route) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._userPreferencesService = _userPreferencesService;
        this._route = _route;
    }
    EmployeeComponent2.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeById(empCode).retry(5).subscribe(function (employeData) { return _this.employee = employeData; }, function (error) { _this.statusMessage = "There is some problem to loading from server"; });
    };
    Object.defineProperty(EmployeeComponent2.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colorPref;
        },
        set: function (value) {
            this._userPreferencesService.colorPref = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeComponent2.prototype.onButtonClick = function () {
        this._route.navigate(['/Home']);
    };
    EmployeeComponent2 = __decorate([
        core_1.Component({
            selector: 'my-employee2',
            templateUrl: 'app/employee/employee2.component.html',
            styleUrls: ['app/employee/employee.component.css'],
            providers: [employee_service_1.EmployeeService] // registring service for dependency injection ,but this is not right way to define here , If you want to make singalton define in appModule 
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.ActivatedRoute,
            userPreferences_service_1.UserPreferencesService, router_1.Router])
    ], EmployeeComponent2);
    return EmployeeComponent2;
}());
exports.EmployeeComponent2 = EmployeeComponent2;
//# sourceMappingURL=employee2.component.js.map