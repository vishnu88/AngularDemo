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
var EmployeeCountComponent = /** @class */ (function () {
    function EmployeeCountComponent() {
        this.selectedRadioButtonValue = 'All';
        this.countRadioButtonSelectionChangedEvent = new core_1.EventEmitter();
    }
    EmployeeCountComponent.prototype.onRadioButtonSelection = function () {
        this.countRadioButtonSelectionChangedEvent.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    };
    EmployeeCountComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var current = JSON.stringify(change.previousValue);
            console.log("ngOnChanges " + current);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeCountComponent.prototype, "countRadioButtonSelectionChangedEvent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCountComponent.prototype, "all", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCountComponent.prototype, "male", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCountComponent.prototype, "female", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EmployeeCountComponent.prototype, "simpleText", void 0);
    EmployeeCountComponent = __decorate([
        core_1.Component({
            selector: 'my-employeeCount',
            templateUrl: 'app/employee/employeeCount.component.html',
            styleUrls: ['app/employee/employeeCount.component.css']
        })
    ], EmployeeCountComponent);
    return EmployeeCountComponent;
}());
exports.EmployeeCountComponent = EmployeeCountComponent;
//# sourceMappingURL=employeeCount.component.js.map