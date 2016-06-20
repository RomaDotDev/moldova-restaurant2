import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { BanquetComponent } from './banquet/banquet.component';
import { LunchComponent } from './lunch/lunch.component';

export const routes: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'banquet', component: BanquetComponent},
    {path: 'lunch', component: LunchComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
