import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavbarPage } from './compartido/navbar/navbar.page';
import { FootbarPage } from './compartido/footbar/footbar.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,NavbarPage,FootbarPage],
})
export class AppComponent {
  constructor() {}
}
