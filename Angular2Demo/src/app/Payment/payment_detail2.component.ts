import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from '../Service/payment_detail.service';

@Component({
    selector: 'my-payment-detail',
    templateUrl: 'app/Payment/payment_detail.component2.html'

})
export class PaymentDetail implements OnInit {
   

    submitStatus: string ="Submit"
    ngOnInit(): void {
        this.resetForm();
      
    }

    constructor(private _paymentDetailService: PaymentDetailService) { }

    resetForm(form?: NgForm) {
        if (form != null)
            this._paymentDetailService.formData = { pmId: 0, cardExpirationDate: '', cardNumber: '', cardOwnerName: '', cvv: ''}
    }


    onSubmit(form: NgForm) {
        if (this._paymentDetailService.formData.pmId==0)
            this._paymentDetailService.postPaymentDetails(form.value).subscribe(res => { this._paymentDetailService.refreshPaymentDetailList().subscribe(res => { this._paymentDetailService.list = res }) }, err => { this.submitStatus = "ServerDown" })
        //else
        //    this._paymentDetailService.updatePaymentDetails(form.value).subscribe(res => { this._paymentDetailService.refreshPaymentDetailList().subscribe(res => { this._paymentDetailService.list = res }) }, err => { this.submitStatus = "ServerDown" })
        //console.log("*********************")
      
    }

}
