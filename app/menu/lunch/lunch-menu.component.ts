import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MenuService } from '../menu.service';
import { DishComponent } from '../shared/dish/dish.component';
import { Dish } from '../shared/dish/dish';

@Component({
    template: `
        <ul>
            <li *ngFor="let item of lunchMenu | async">
                <dish [item]="item"></dish>
            </li>
        <ul>
    `,
    providers: [ MenuService ],
    directives: [ DishComponent ]
})

@Injectable()
export class LunchMenuComponent implements OnInit{
    private lunchMenu:Observable<Dish[]>;

    constructor(
        private menuService: MenuService
    ){}

    ngOnInit(){
        this.lunchMenu = this.menuService.getMenu('json/lunch.json');
    }
}
