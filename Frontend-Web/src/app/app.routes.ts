import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import path from 'path';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';

export const routes: Routes = [
    {path: 'nav', component :  NavComponent},
    {path: 'disponibilidad', component: DisponibilidadComponent}
];
