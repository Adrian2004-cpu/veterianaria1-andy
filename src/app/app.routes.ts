import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';

export const routes: Routes = [
    //1. Ruta inicial
    { path: 'home', component: Home },
    //2.Rutas de Navegacion
    { path: 'acerca', component: Acerca },
    //3.Redireccion si el usuario escribe una url no existe    
    { path: 'consultas', component: Consultas },
    { path: 'mascotas', component: Mascotas },

];
