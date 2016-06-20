import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    selector: 'moldova',
    template: `
        <header></header>
        <navigation></navigation>
        <router-outlet></router-outlet>
        <footer></footer>
    `,
    directives: [
          ROUTER_DIRECTIVES,
          NavigationComponent,
          HeaderComponent,
          FooterComponent
    ]
})

export class AppComponent {
}
