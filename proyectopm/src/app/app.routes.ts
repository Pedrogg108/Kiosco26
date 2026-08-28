import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'novedades',
    loadComponent: () => import('./paginas/novedades/novedades.page').then( m => m.NovedadesPage)
  },
  {
    path: 'sorteos',
    loadComponent: () => import('./paginas/sorteos/sorteos.page').then( m => m.SorteosPage)
  },
  {
    path: 'ofertas',
    loadComponent: () => import('./paginas/ofertas/ofertas.page').then( m => m.OfertasPage)
  },
  {
    path: 'navbar',
    loadComponent: () => import('./compartido/navbar/navbar.page').then( m => m.NavbarPage)
  },
];
