import { Component, Injectable, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';
import { DishComponent } from '../shared/dish/dish.component';
import { Dish } from '../shared/dish/dish';

@Component({
    template: `
        <ul>
            <li *ngFor="let item of dishes">
                <dish [item]="item"></dish>
            </li>
        <ul>
    `,
    providers: [ MenuService ],
    directives: [ DishComponent ]
})

@Injectable()
export class CasualMenuComponent implements OnInit{
    private dishes:Array<Dish>;

    constructor(
        private menuService: MenuService
    ){}

    ngOnInit(){
        this.menuService.getMenu().subscribe(
            res => this.dishes = res
        );
    }
}
