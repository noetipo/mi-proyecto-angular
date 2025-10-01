import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {Productos} from './pages/productos/productos';
import {ProductoDetalle} from './pages/producto-detalle/producto-detalle';
import {NotFound} from './pages/not-found/not-found';


export const routes: Routes = [
  // Ruta por defecto
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  // Rutas básicas
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'contact', component: Contact},

  // Ruta con parámetros
  {path: 'productos', component: Productos},
  {path: 'productos/:id', component: ProductoDetalle},

  // Ruta 404
  {path: '**', component: NotFound}
];

