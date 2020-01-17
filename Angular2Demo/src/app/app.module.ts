import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component'
import { EmployeeComponent2 } from './Employee/employee2.component'
import { EmployeeListComponent } from './Employee/employee_list.component'
import { JavaScriptComponet } from './Others/javaScript.component'
import { EmployeeTitlePipe } from './Employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './Employee/employeeCount.component'
import { HomeComponent } from './Home/home.component'
import { PageNotFoundCOmponent } from './Others/pageNotFound.component'
import { UserPreferencesService } from './Employee/userPreferences.service'
import { PaymentDetailListComponent } from './Payment/payment-detail-list.component';
import { Payment } from './Payment/payment.component';
import { PaymentDetail } from './Payment/payment_detail2.component';
import { PaymentDetailService } from './Service/payment_detail.service';
import { ExampleBootStarpComponent } from './ExampleBootstarp/com_example_bootstrap.component';


const appRout: Routes = [{ path: 'Home', component: HomeComponent },
    { path: 'EmployeeList', component: EmployeeListComponent },
    { path: 'Employee', component: EmployeeComponent },
    { path: 'JavaScript', component: JavaScriptComponet },
    { path: 'Payment', component: Payment },
    { path: 'ExampleBootStrap', component: ExampleBootStarpComponent },
    { path: 'Employee2/:code', component: EmployeeComponent2 },
{ path: '', redirectTo: '/Home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundCOmponent }
]
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,  RouterModule.forRoot(appRout),FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeComponent2, EmployeeListComponent,
        JavaScriptComponet, EmployeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundCOmponent, PaymentDetail, PaymentDetailListComponent, Payment, ExampleBootStarpComponent],
    bootstrap: [AppComponent], providers: [UserPreferencesService, PaymentDetailService]

})
export class AppModule { }
