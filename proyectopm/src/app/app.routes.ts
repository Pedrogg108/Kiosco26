import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'preinicio',
    pathMatch: 'full',
  },
  {
    path: 'novedades',
    loadComponent: () => import('./paginas/novedades/novedades.page').then(m => m.NovedadesPage)
  },
  {
    path: 'sorteos',
    loadComponent: () => import('./paginas/sorteos/sorteos.page').then(m => m.SorteosPage)
  },
  {
    path: 'ofertas',
    loadComponent: () => import('./paginas/ofertas/ofertas.page').then(m => m.OfertasPage)
  },
  {
    path: 'navbar',
    loadComponent: () => import('./compartido/navbar/navbar.page').then(m => m.NavbarPage)
  },
  {
    path: 'footbar',
    loadComponent: () => import('./compartido/footbar/footbar.page').then(m => m.FootbarPage)
  },
  {
    path: 'mas-opciones',
    loadComponent: () => import('./paginas/mas-opciones/mas-opciones.page').then(m => m.MasOpcionesPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./paginas/productos/productos.page').then(m => m.ProductosPage)
  },
  {
    path: 'preinicio',
    loadComponent: () => import('./auth/preinicio/preinicio.page').then(m => m.PreinicioPage)
  },
  {
    path: 'inicioSesion',
    loadComponent: () => import('./auth/inicio-sesion/inicio-sesion.page').then(m => m.InicioSesionPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./auth/registro/registro.page').then(m => m.RegistroPage)
  },
  {
    path: 'cuenta',
    loadComponent: () => import('./paginas/cuenta/cuenta.page').then(m => m.CuentaPage)
  },
  { path: '**', redirectTo: 'preinicio' }



];
