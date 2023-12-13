import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselSliderComponent } from './carousel-slider/Feature/carousel-slider.component';

export const routes: Routes = [
    { path: "", redirectTo: "carousel", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Home"},
    { path: "carousel", component: CarouselSliderComponent, title: "Carousel"}
];