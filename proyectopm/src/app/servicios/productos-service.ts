import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Lata de Coca Cola 354mL",
      precio: 2000,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      destacado:true,
      img: "../assets/Imagenes/lataCocaCola.png",
      alt: "Lata de Coca Cola 354mL"
    },

    {
      id: 2,
      nombre: "Alfajor Rasta Negro",
      precio: 2500,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      destacado:false,
      img: "../assets/Imagenes/alfajorRastaNegro.jpg",
      alt: "Alfajor Rasta Negro"
    },

    {
      id: 3,
      nombre: "Saladix Papas Fritas 50g",
      precio: 2300,
      disponibilidad: true,
      oferta: true,
      descuento: 20,
      destacado:true,
      img: "../assets/Imagenes/saladixSnacks.png",
      alt: "Saladix Papas Fritas 50g"
    },

    {
      id: 4,
      nombre: "Chupetin Blueberry",
      precio: 500,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      destacado:false,
      img: "../assets/Imagenes/chupetin.png",
      alt: "Chupetin Blueberry"
    },

    {
      id: 5,
      nombre: "Fizz Extreme",
      precio: 500,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      destacado:false,
      img: "../assets/Imagenes/fizzExtreme.png",
      alt: "Fizz Extreme"
    },
    {
      id: 6,
      nombre: "Barra Bon O Bon XL",
      precio: 1200,
      disponibilidad: true,
      oferta: true,
      descuento: 15,
      destacado:false,
      img: "../assets/Imagenes/barraBonOBonXL.png",
      alt: "Fizz Extreme"
    },
    {
      id: 7,
      nombre: "Juguito Baggio 125mL",
      precio: 1000,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      destacado:true,
      img: "../assets/Imagenes/juguitoBaggio.jpg",
      alt: "Juguito Baggio 125mL"
    }
  ]
  /**
   * Array que almacena las ofertas que el usuario ya canjeó.
   * Se usa para mostrar el historial de canjes en la pestaña "Canjeadas" de la seccion ofertas.
   */
  ofertasCanjeadas: Producto[] = [];

  /**
   * Canjea una oferta.
   * 
   * - Evita que se pueda canjear dos veces la misma oferta.
   * - Marca la propiedad `oferta` del producto como `false`.
   * - Agrega el producto al historial de ofertas canjeadas.
   * 
   * for producto Producto/oferta que se desea canjear
   */
  canjearOferta(producto: Producto): void {
    // Evitar canjear dos veces
    if (!producto.oferta) return;

    producto.oferta = false;
    this.ofertasCanjeadas.push(producto);
  }

  /**
   * Getter que devuelve solo las ofertas que todavía están activas.
   * Útil para mostrar la lista de ofertas disponibles.
   */
  get ofertasActivas(): Producto[] {
    return this.Productos.filter(p => p.oferta);
  }

  get destacados():Producto[]{
    return this.Productos.filter(p=>p.destacado);
  }
}
