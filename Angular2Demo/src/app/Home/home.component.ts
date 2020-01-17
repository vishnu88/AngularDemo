import { Component } from '@angular/core';
import { UserPreferencesService } from '../Employee/userPreferences.service';

@Component({
  
    template: `<h1>The Page Does Not Exists..</h1>
                <div> color preferences:
                 <input type='text' [(ngModel)]='colourJi' [style.background]='colourJi'/> </div>`,
   
})
export class HomeComponent {
   
    constructor(private _userPreferencesService: UserPreferencesService) {

    }
    get colourJi(): string {
        return this._userPreferencesService.colorPref;
    }

    set colourJi(value: string) {
        this._userPreferencesService.colorPref = value;
    }
}
