import { Component, Injectable, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    template: `
        <nav>
            <a [routerLink]="['./casual']">Casual Menu</a>
            <a [routerLink]="['./lunch']">Lunch Menu</a>
            <a [routerLink]="['./banquet']">Banquet Menu</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})

@Injectable()
export class MenuComponent implements OnInit{
    constructor(){}
    ngOnInit(){}
}
