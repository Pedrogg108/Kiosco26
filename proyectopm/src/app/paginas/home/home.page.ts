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
  constructor(private productosService: ProductosService) { }//se injecta el servicio ProductosService

  get Productos() {
    return this.productosService.Productos; //retorna los productos del servicio
  }
  textoBusqueda: string = '';//se declara la variabla textoBusqueda de tipo string que empiza vacia

  buscarProducto(event: CustomEvent) {//la funcion recibe como parametro event indicando q es un evento personalizado que contiene info
    this.textoBusqueda = event.detail.value ?? '';//se guarda lo que busco en la variable textoBusqueda pero si el valor es null o undefined cambia a vacio ''
  }

  get productosFiltrados() {
    const texto = this.textoBusqueda.trim().toLowerCase();//en la constante se guarda lo que se busco despues de que trim()haya eliminado los espacio en blanco del inicio y final y que toLowerCase() lo convirtiera en minusculas

    // Si no escribió nada, mostrar los primeros 8 productos
    if (texto === '') {
      return this.Productos.slice(0, 8);
    }

    // Si escribió algo, buscar en todos los productos
    return this.Productos.filter(p =>p.nombre.toLowerCase().includes(texto)//Se filtran los productos comprobando si el nombre de cada uno, convertido a minúsculas,contiene el texto que escribió el usuario en el buscador.
    );
  }


}
