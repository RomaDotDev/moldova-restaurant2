import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MenuService } from '../menu.service';
import { DishComponent } from '../shared/dish/dish.component';
import { Dish } from '../shared/dish/dish';

@Component({
    template: `
        <h1>Banquet Moldova</h1>
        <ul>
            <li *ngFor="let item of banquetMoldova | async">
                <dish [item]="item"></dish>
            </li>
        <ul>

        <h1>Banquet Basarabia</h1>
        <ul>
            <li *ngFor="let item of banquetBasarabia | async">
                <dish [item]="item"></dish>
            </li>
        <ul>
    `,
    providers: [ MenuService ],
    directives: [ DishComponent ]
})

@Injectable()
export class BanquetMenuComponent implements OnInit{
    private banquetMoldova:Observable<Dish[]>;
    private banquetBasarabia:Observable<Dish[]>;

    constructor(
        private menuService: MenuService
    ){}

    ngOnInit(){
        this.banquetMoldova = this.menuService.getMenu('json/banquet-moldova.json');
        this.banquetBasarabia = this.menuService.getMenu('json/banquet-basarabia.json');
    }
}
