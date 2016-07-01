import { Component, Injectable } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navigation',
    template: `
        <nav>
            <a [routerLink]="['/']">Home</a>
            <a [routerLink]="['/about-us']">About Us</a>
            <a [routerLink]="['/testimonials']">Testimonials</a>
            <a [routerLink]="['/contact']">Contact</a>
            <a [routerLink]="['/gallery']">Gallery</a>
            <a [routerLink]="['/menu']">Menu</a>
        </nav>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ]
})

@Injectable()
export class NavigationComponent {
}
