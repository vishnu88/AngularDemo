export interface IEmployee {
    code: string
    name: string
    gender: string
    annualSalary: number
    dob: string

}

export class Employee implements IEmployee {
    code: string;    name: string;
    gender: string;
    annualSalary: number;
    dob: string;

    constructor(code: string, name: string, gender: string, annualSalary: number, dob: string) {
        this.code = code
        this.name = name
        this.gender = gender
        this.annualSalary = annualSalary
        this.dob=dob


    }
}

export class Employee2 implements IEmployee {

    constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dob: string) {

    }
}