import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { BanquetComponent } from './banquet/banquet.component';
import { LunchComponent } from './lunch/lunch.component';

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
    ],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@Routes([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/about-us', name: 'AboutUs', component: AboutUsComponent},
    {path: '/testimonials', name: 'Testimonials', component: TestimonialsComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/gallery', name: 'Gallery', component: GalleryComponent},
    {path: '/menu', name: 'Menu', component: MenuComponent},
    {path: '/banquet', name: 'Banquet', component: BanquetComponent},
    {path: '/lunch', name: 'Lunch', component: LunchComponent}
])

export class AppComponent {
}
