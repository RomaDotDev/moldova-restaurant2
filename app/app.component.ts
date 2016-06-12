import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    template: `
        <alert type="info">Hello from ng2-bootstrap  {{ date.toDateString() }}</alert>
        <div style="display:inline-block; min-height:290px;">
          <datepicker [(ngModel)]="date" showWeeks="true"></datepicker>
        </div>
    `,
    directives: [
      AlertComponent, DATEPICKER_DIRECTIVES
    ]
})
export class AppComponent {
     date: Date = new Date();
}
