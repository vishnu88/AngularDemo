import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { UserPreferencesService } from './userPreferences.service';
import 'rxjs/add/operator/retry'
@Component({
    selector: 'my-employee2',
    templateUrl: 'app/employee/employee2.component.html',
    styleUrls: ['app/employee/employee.component.css'],
     providers: [EmployeeService] // registring service for dependency injection ,but this is not right way to define here , If you want to make singalton define in appModule 
})
export class EmployeeComponent2 {
    employee: IEmployee
    statusMessage:string
    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _userPreferencesService: UserPreferencesService, private _route: Router ) {
    }
    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code']
        this._employeeService.getEmployeeById(empCode).retry(5).subscribe((employeData) => this.employee = employeData,
            (error) => { this.statusMessage = "There is some problem to loading from server" })
    }

    get colour(): string {
        return this._userPreferencesService.colorPref;
    } 

    set colour(value: string) {
        this._userPreferencesService.colorPref = value;
    }
    onButtonClick(): void {
        this._route.navigate(['/Home'])
    }
}
