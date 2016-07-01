import { Component, Injectable, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})

@Injectable()
export class MenuComponent implements OnInit{
    constructor(){}
    ngOnInit(){}
}
