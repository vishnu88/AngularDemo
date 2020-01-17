import { Component ,OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from './employee.service';
import { ISubscription } from 'rxjs/Subscription'

@Component({
    selector: 'my-employeelist',
    templateUrl: 'app/employee/employee_list.component.html',
    styleUrls: ['app/employee/employee_list.component.css'],
    providers: [EmployeeService] // registring service for dependency injection
})
export class EmployeeListComponent implements OnInit {
   
    selectedEmployeeRadioButtonValue: string = 'All';
    empolyees: any[];
    subscription: ISubscription
    constructor(private _employeeService :EmployeeService) {
        this.empolyees = [
            { code: 'E01', name: "VVVVVV", gender: 'Male', annual_sal: 10000, dob: '19/9/1977' },
            { code: 'e05', name: 'Ansuman', gender: 'Male', annual_sal: 30000, dob: '19/1/1977' },
            { code: 'E06', name: 'Nancy', gender: 'Female', annual_sal: 60000, dob: '19/8/1977' },
            { code: 'E07', name: 'Rekha', gender: 'Female', annual_sal: 30000, dob: '19/5/1967' }];

        this.empolyees3 =
            [
                { code: 'E01', name: 'Vishnu', gender: 'Male', annualSalary: 10000, dob: '19/9/1977' },
            { code: 'e01', name: 'Mayank', gender: 'Male', annualSalary: 80000, dob: '19/9/1977' },
            { code: 'e02', name: 'Ramesh', gender: 'Male', annualSalary: 90000, dob: '19/9/1977' },
            { code: 'E06', name: 'Nancy', gender: 'Female', annualSalary: 60000, dob: '19/8/1977' },
                { code: 'E07', name: 'Rekha', gender: 'Female', annualSalary: 30000, dob: '19/5/1967' }];

        //this.empolyees4 = _employeeService.getEmployee()
        //Actually service is returning observable so we need to subscribe observable
        this._employeeService.getEmployee().subscribe((employeData) => this.empolyees4 = employeData)
    }

    statusMessage :string ="Loading data....."
    ngOnInit(): void {
        //Specially called for service initialization
        //Just called after constructor
        //  this.empolyeesOnInITinitaialization = this._employeeService.getEmployee()
        this.subscription=  this._employeeService.getEmployee().subscribe((employeData) => this.empolyeesOnInITinitaialization = employeData,
            (error) => { this.statusMessage="There is some problem to loading from server" })
    }

    getTotalEmployeeCountComingFromService(): number {
        return this.empolyeesOnInITinitaialization.length;
    }
    getTotalEmployeeCount(): number {
        return this.empolyees.length;
    }
    getTotalMaleEmployeeCount(): number {
        return this.empolyees.filter(x => x.gender === "Male").length;
    }
    getTotalFemaleEmployeeCount(): number {

        return this.empolyees.filter(x => x.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChangedEventListener(selectedRadioButtonValue: string) :void{

        console.log(this.selectedEmployeeRadioButtonValue);
        this.selectedEmployeeRadioButtonValue = selectedRadioButtonValue;
       
    }

    empolyees2: any[] = []

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }


    empolyees3: IEmployee[];
    empolyees4: IEmployee[];
    empolyeesOnInITinitaialization: IEmployee[];
    usertext: string
//Canceling Request
    cancelRequest(): void {
        this.subscription.unsubscribe()
    }
}
