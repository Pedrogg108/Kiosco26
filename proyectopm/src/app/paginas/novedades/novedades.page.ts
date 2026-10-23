import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos-service';
import { Avisos } from 'src/app/servicios/avisos';

import { IonContent, IonHeader,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle, IonToolbar,IonCardTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle, CommonModule, FormsModule,IonToolbar,IonCardTitle]
})
export class NovedadesPage implements OnInit {
  paso=1;
  constructor(private productosService:ProductosService, private avisos:Avisos) { }
  get Productos(){
    return this.productosService.Productos
  }
  get Avisos(){
    return this.avisos.avisos
  }
  get destacados(){
    return this.productosService.destacados
  }
  ngOnInit() {
  }

}
