import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { PaymentDetail } from '../Payment/payment_detail2.component';
import { PaymentDetailModel } from './PaymentDetailModel';

//THis is required when we are injecting dependency
@Injectable()
export class PaymentDetailService {

    formData: PaymentDetailModel
    list: PaymentDetailModel[];
    name:string
    constructor(private hhtp: Http) {
        // this.list = [{pmId:1,cardOwnerName:'SJD',cardExpirationDate:'dj',cardNumber:'7474u',cvv:'123'}];
        this.formData = new PaymentDetailModel();
    }

    postPaymentDetails(formData: PaymentDetailModel) {
        return this.hhtp.post("http://localhost:56502/api/PaymentDetails", formData)

    }
    updatePaymentDetails(formData: PaymentDetailModel) {
        return this.hhtp.post("http://localhost:56502/api/PaymentDetails/" + formData.pmId, formData)

    }
    refreshPaymentDetailList(): Observable<PaymentDetailModel[]> {
        return this.hhtp.get("http://localhost:56502/api/PaymentDetails").map((response: Response) => <PaymentDetailModel[]>response.json())
       
    }
}