import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    //Property Binding
    isDisabaled: boolean = true;
    //ngIf declartion binding
    showDetails: boolean = true
    classToApply = 'colorClass boldClass';
    boldClassToApply = false;
    colSpan: number = 5;
    fristname = 'Sriyan ';
    lastname = 'Srivastava';
    age = '30 Years';
    gender = 'Male';
    //Style binding property
    isBold: boolean = true
    isItalic = true
    fontSize: number = 30
    alignment:string='center'
    getFullname(): string {
        return this.fristname + ' ' + this.lastname;
    };

     getClass() {
        let classes = {
            boldClass: this.boldClassToApply,
            italicClass: true

        }
        return classes
    }
    getStyle() {
        let mystyles = {
            'font-size' :this.fontSize,
            'font-weight': this.isBold
        }
        return mystyles
    }
    
    onToggeles(): void {
        this.showDetails = !this.showDetails
    }

    adress: string ="Bangalore"
}
