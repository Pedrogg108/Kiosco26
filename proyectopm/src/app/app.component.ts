import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import { NavbarPage } from './compartido/navbar/navbar.page';
import { FootbarPage } from './compartido/footbar/footbar.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,NavbarPage,FootbarPage],
})
export class AppComponent {
  constructor() {}

  router=inject(Router)
  mostrarMenu():boolean{
    return !['/preinicio','/inicioSesion','/registro'].includes(this.router.url)
  }
}
