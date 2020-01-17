import { Injectable } from '@angular/core'
import { IEmployee } from './IEmployee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

//THis is required when we are injecting dependency
@Injectable()
export class EmployeeService {
    constructor(private _httpService :Http) { }

    getEmployee(): Observable<IEmployee[]> {

        return this._httpService.get("http://localhost:51604/api/employees").map((response: Response) => <IEmployee[]>response.json()).catch(this.handelError)
       
    }

    getEmployeeById(empCode: string): Observable<IEmployee> {

        return this._httpService.get("http://localhost:51604/api/employees/" + empCode).map((response: Response) => <IEmployee>response.json()).catch(this.handelError)

    }

    handelError(error: Response) {
        console.error(error)
        return Observable.throw(error)
    }
}