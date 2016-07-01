import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuRoutes } from './menu/menu.routes';

export const routes: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gallery', component: GalleryComponent},
    ...MenuRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
