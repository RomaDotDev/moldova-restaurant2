import { Component, Injectable, Input } from '@angular/core';
import { Dish } from './dish';

@Component({
    selector: 'dish',
    template: `
        <div class="spinner">
            <div class="photo" id="{{ item.pic }}"></div>
        </div>
        <h3>{{ item.title }}</h3>
		<p>
			{{ item.desc_en }}
		</p>
		<p>
			{{ item.desc_ru }}
		</p>
		<span>{{ item.price }}</span>
    `
})

@Injectable()
export class DishComponent{
    @Input() item: Dish;

    constructor(){}
}
