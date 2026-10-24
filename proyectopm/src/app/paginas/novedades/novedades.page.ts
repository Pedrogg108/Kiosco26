import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos-service';//se importa el servicio
import { Avisos } from 'src/app/servicios/avisos';//se importa el servicio
import { IonContent, IonHeader,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle, IonToolbar,IonCardTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle, CommonModule, FormsModule,IonToolbar,IonCardTitle]
})
export class NovedadesPage implements OnInit {
  paso=1;//se crea la variable paso iniciando en 1
  constructor(private productosService:ProductosService, private avisos:Avisos) { }//se injectan los servicios ProductosServices y Avisos
  get Productos(){//Se crea un get Productos que retorna los productos que vienen del servicio ProductosServices
    return this.productosService.Productos//accede al servicio y obtiene la lista de productos
  }
  get Avisos(){//Se crea un get Avisos que retorna los avisos que vienen del servicio Avisos
    return this.avisos.avisos//accede al servicio y obtiene la lista de avisos
  }
  get destacados(){//Se crea un get destacados que retorna los destacados que vienen del servicio ProductosServices
    return this.productosService.destacados//accede al servicio y obtiene la lista de destacados
  }
  ngOnInit() {
  }

}
