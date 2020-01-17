import { Component,Input, Output, EventEmitter,OnChanges,SimpleChanges} from '@angular/core';

@Component({
    selector: 'my-employeeCount',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent implements OnChanges {
    selectedRadioButtonValue: string = 'All';
    @Output()
    countRadioButtonSelectionChangedEvent: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;
    @Input()
    simpleText: string;

    onRadioButtonSelection(): void {

        this.countRadioButtonSelectionChangedEvent.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
        
    }

    ngOnChanges(changes: SimpleChanges) {

        for (let propertyName in changes) {
            let change = changes[propertyName]
            let current = JSON.stringify(change.previousValue)
            console.log("ngOnChanges " + current)
        }

    }
}
