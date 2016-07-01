import { RouterConfig } from '@angular/router';

import { MenuComponent } from './menu.component';
import { CasualMenuComponent } from './casual/casual-menu.component';
import { BanquetMenuComponent } from './banquet/banquet-menu.component';
import { LunchMenuComponent } from './lunch/lunch-menu.component';

export const MenuRoutes: RouterConfig = [
    {
        path: 'menu',
        component: MenuComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'casual'
            },
            {
                path: 'casual',
                component: CasualMenuComponent
            },
            {
                path: 'lunch',
                component: LunchMenuComponent
            },
            {
                path: 'banquet',
                component: BanquetMenuComponent
            }
        ]
    }
];
