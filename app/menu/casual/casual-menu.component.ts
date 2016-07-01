import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MenuService } from '../menu.service';
import { DishComponent } from '../shared/dish/dish.component';
import { Dish } from '../shared/dish/dish';

@Component({
    template: `
        <ul>
            <li *ngFor="let item of casualMenu | async">
                <dish [item]="item"></dish>
            </li>
        <ul>
    `,
    providers: [ MenuService ],
    directives: [ DishComponent ]
})

@Injectable()
export class CasualMenuComponent implements OnInit{
    private casualMenu:Observable<Dish[]>;

    constructor(
        private menuService: MenuService
    ){}

    ngOnInit(){
        this.casualMenu = this.menuService.getMenu('json/menu.json');
    }
}
