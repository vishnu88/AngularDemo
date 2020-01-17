import { Injectable } from '@angular/core'

//THis is required when we are injecting dependency
@Injectable()
export class UserPreferencesService {
    constructor() { }

    colorPref :string ='red'
}