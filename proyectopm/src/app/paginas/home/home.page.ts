import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle'
import { ProductosService } from 'src/app/servicios/productos-service';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar } from '@ionic/angular/standalone';
register()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // necesario si es standalone
})
export class HomePage {
  constructor(private productosService: ProductosService) { }

  get Productos() {
    return this.productosService.Productos;
  }
  textoBusqueda: string = '';

  buscarProducto(event: CustomEvent) {
    this.textoBusqueda = event.detail.value ?? '';
  }

  get productosFiltrados() {
    const texto = this.textoBusqueda.trim().toLowerCase();

    // Si no escribió nada, mostrar los primeros 8
    if (texto === '') {
      return this.Productos.slice(0, 8);
    }

    // Si escribió algo, buscar en todos los productos
    return this.Productos.filter(p =>
      p.nombre.toLowerCase().includes(texto)
    );
  }


}
