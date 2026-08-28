import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarPage } from 'src/app/compartido/navbar/navbar.page';
import {register} from 'swiper/element/bundle'
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar,IonCol, IonGrid, IonRow} from '@ionic/angular/standalone';
register()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ NavbarPage,IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar,IonCol, IonGrid, IonRow],
   schemas: [CUSTOM_ELEMENTS_SCHEMA] // necesario si es standalone
})
export class HomePage {
  constructor() {}
}
