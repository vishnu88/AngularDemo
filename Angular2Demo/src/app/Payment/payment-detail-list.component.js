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
var payment_detail_service_1 = require("../Service/payment_detail.service");
var PaymentDetailListComponent = /** @class */ (function () {
    function PaymentDetailListComponent(_service) {
        this._service = _service;
        this.error = "Payment List";
    }
    PaymentDetailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.refreshPaymentDetailList().subscribe(function (res) { _this._service.list = res; }, function (err) { _this.error = "ServerDown"; });
    };
    PaymentDetailListComponent.prototype.populateData = function (p) {
        this._service.formData = Object.assign({}, p);
    };
    PaymentDetailListComponent = __decorate([
        core_1.Component({
            selector: 'my-payment-details-list',
            templateUrl: 'app/Payment/payment_detail_list.html'
        }),
        __metadata("design:paramtypes", [payment_detail_service_1.PaymentDetailService])
    ], PaymentDetailListComponent);
    return PaymentDetailListComponent;
}());
exports.PaymentDetailListComponent = PaymentDetailListComponent;
//# sourceMappingURL=payment-detail-list.component.js.map