import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos-service';

import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle, IonToolbar, CommonModule, FormsModule]
})
export class NovedadesPage implements OnInit {
  paso=1;
  constructor(private productosService:ProductosService) { }
  get Productos(){
    return this.productosService.Productos
  }
  ngOnInit() {
  }

}
