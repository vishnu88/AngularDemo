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
var PaymentDetail = /** @class */ (function () {
    function PaymentDetail(_paymentDetailService) {
        this._paymentDetailService = _paymentDetailService;
        this.submitStatus = "Submit";
    }
    PaymentDetail.prototype.ngOnInit = function () {
        this.resetForm();
    };
    PaymentDetail.prototype.resetForm = function (form) {
        if (form != null)
            this._paymentDetailService.formData = { pmId: 0, cardExpirationDate: '', cardNumber: '', cardOwnerName: '', cvv: '' };
    };
    PaymentDetail.prototype.onSubmit = function (form) {
        var _this = this;
        if (this._paymentDetailService.formData.pmId == 0)
            this._paymentDetailService.postPaymentDetails(form.value).subscribe(function (res) { _this._paymentDetailService.refreshPaymentDetailList().subscribe(function (res) { _this._paymentDetailService.list = res; }); }, function (err) { _this.submitStatus = "ServerDown"; });
        //else
        //    this._paymentDetailService.updatePaymentDetails(form.value).subscribe(res => { this._paymentDetailService.refreshPaymentDetailList().subscribe(res => { this._paymentDetailService.list = res }) }, err => { this.submitStatus = "ServerDown" })
        //console.log("*********************")
    };
    PaymentDetail = __decorate([
        core_1.Component({
            selector: 'my-payment-detail',
            templateUrl: 'app/Payment/payment_detail.component2.html'
        }),
        __metadata("design:paramtypes", [payment_detail_service_1.PaymentDetailService])
    ], PaymentDetail);
    return PaymentDetail;
}());
exports.PaymentDetail = PaymentDetail;
//# sourceMappingURL=payment_detail2.component.js.map