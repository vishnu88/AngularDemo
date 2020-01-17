import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../Service/payment_detail.service';
import { PaymentDetailModel } from '../Service/PaymentDetailModel';



@Component({
    selector: 'my-payment-details-list',
    templateUrl: 'app/Payment/payment_detail_list.html'
})
export class PaymentDetailListComponent implements OnInit {
    error: string = "Payment List"
   
    constructor(private _service: PaymentDetailService) { }
    
    ngOnInit(): void {
        
        this._service.refreshPaymentDetailList().subscribe(res => { this._service.list = res }, err => { this.error = "ServerDown" });
    }
   
    populateData(p: PaymentDetailModel) {
        this._service.formData = Object.assign({},p);

    }
}
