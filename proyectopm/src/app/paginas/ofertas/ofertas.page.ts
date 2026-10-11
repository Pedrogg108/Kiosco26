
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductosService } from 'src/app/servicios/productos-service';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OfertasPage implements OnInit {

  
  detalles = false; /** Controla si se está mostrando la vista de detalle de una oferta */

  
  enOferta: Producto | null = null; /** Producto (oferta) que se está visualizando actualmente en el detalle */

  /** 
   * Controla el filtro de la lista:
   * - true  → muestra ofertas activas
   * - false → muestra ofertas canjeadas
   */
  activo = true;

  constructor(private productosService: ProductosService) {}

  ngOnInit() {}

  // ========================
  // GETTERS
  // ========================

  /** Lista completa de productos (viene del servicio) */
  get Productos() {
    return this.productosService.Productos;
  }

  /** 
   * Calcula el precio final de la oferta que se está viendo
   * aplicando el descuento correspondiente.
   */
  get precioFinal(): number {
    return (this.enOferta?.precio ?? 0) * (1 - (this.enOferta?.descuento ?? 0) / 100);
  }

  /** Filtra solo las ofertas que todavía están activas */
  get ofertasActivas() {
    return this.productosService.Productos.filter(p => p.oferta);
  }

  /** Lista de ofertas que el usuario ya canjeó */
  get ofertasCanjeadas() {
    return this.productosService.ofertasCanjeadas;
  }

  // ========================
  // MÉTODOS
  // ========================

  /**
   * Abre la vista de detalle de una oferta.
   * for p Producto/oferta seleccionada
   */
  detallesOferta(p: Producto) {
    this.enOferta = p;
    this.detalles = true;
  }

  /**
   * Cierra la vista de detalle y limpia la oferta seleccionada.
   */
  cerrarDetalles() {
    this.detalles = false;
    this.enOferta = null;
  }

  /**
   * Canjea una oferta:
   * - Llama al servicio para marcarla como canjeada
   * - Muestra un mensaje de éxito con SweetAlert2
   * - Cierra la vista de detalle
  
   */
  canjearOferta(p: Producto) {
    this.productosService.canjearOferta(p);

    Swal.fire({
      title: "¡Oferta canjeada!",
      icon: "success",
      heightAuto: false,          // Necesario para que funcione bien en Ionic
      backdrop: true,
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
      customClass: {
        container: 'swal-on-top'  // Clase para forzar z-index alto
      }
    });

    this.cerrarDetalles();
  }
}


