"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./Employee/employee.component");
var employee2_component_1 = require("./Employee/employee2.component");
var employee_list_component_1 = require("./Employee/employee_list.component");
var javaScript_component_1 = require("./Others/javaScript.component");
var employeeTitle_pipe_1 = require("./Employee/employeeTitle.pipe");
var employeeCount_component_1 = require("./Employee/employeeCount.component");
var home_component_1 = require("./Home/home.component");
var pageNotFound_component_1 = require("./Others/pageNotFound.component");
var userPreferences_service_1 = require("./Employee/userPreferences.service");
var payment_detail_list_component_1 = require("./Payment/payment-detail-list.component");
var payment_component_1 = require("./Payment/payment.component");
var payment_detail2_component_1 = require("./Payment/payment_detail2.component");
var payment_detail_service_1 = require("./Service/payment_detail.service");
var com_example_bootstrap_component_1 = require("./ExampleBootstarp/com_example_bootstrap.component");
var appRout = [{ path: 'Home', component: home_component_1.HomeComponent },
    { path: 'EmployeeList', component: employee_list_component_1.EmployeeListComponent },
    { path: 'Employee', component: employee_component_1.EmployeeComponent },
    { path: 'JavaScript', component: javaScript_component_1.JavaScriptComponet },
    { path: 'Payment', component: payment_component_1.Payment },
    { path: 'ExampleBootStrap', component: com_example_bootstrap_component_1.ExampleBootStarpComponent },
    { path: 'Employee2/:code', component: employee2_component_1.EmployeeComponent2 },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundCOmponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRout), forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employee2_component_1.EmployeeComponent2, employee_list_component_1.EmployeeListComponent,
                javaScript_component_1.JavaScriptComponet, employeeTitle_pipe_1.EmployeeTitlePipe, employeeCount_component_1.EmployeeCountComponent, home_component_1.HomeComponent, pageNotFound_component_1.PageNotFoundCOmponent, payment_detail2_component_1.PaymentDetail, payment_detail_list_component_1.PaymentDetailListComponent, payment_component_1.Payment, com_example_bootstrap_component_1.ExampleBootStarpComponent],
            bootstrap: [app_component_1.AppComponent], providers: [userPreferences_service_1.UserPreferencesService, payment_detail_service_1.PaymentDetailService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map