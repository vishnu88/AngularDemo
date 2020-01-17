"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        //Property Binding
        this.isDisabaled = true;
        //ngIf declartion binding
        this.showDetails = true;
        this.classToApply = 'colorClass boldClass';
        this.boldClassToApply = false;
        this.colSpan = 5;
        this.fristname = 'Sriyan ';
        this.lastname = 'Srivastava';
        this.age = '30 Years';
        this.gender = 'Male';
        //Style binding property
        this.isBold = true;
        this.isItalic = true;
        this.fontSize = 30;
        this.alignment = 'center';
        this.adress = "Bangalore";
    }
    EmployeeComponent.prototype.getFullname = function () {
        return this.fristname + ' ' + this.lastname;
    };
    ;
    EmployeeComponent.prototype.getClass = function () {
        var classes = {
            boldClass: this.boldClassToApply,
            italicClass: true
        };
        return classes;
    };
    EmployeeComponent.prototype.getStyle = function () {
        var mystyles = {
            'font-size': this.fontSize,
            'font-weight': this.isBold
        };
        return mystyles;
    };
    EmployeeComponent.prototype.onToggeles = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map