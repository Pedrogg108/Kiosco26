import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: "caramelo",
      precio: 12,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      img: "../assets/Imagenes/caramelos.png",
      alt: "dsd"
    },

    {
      id: 2,
      nombre: "caramelo2",
      precio: 13,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      img: "../assets/Imagenes/caramelos.png",
      alt: "dsd"
    },

    {
      id: 3,
      nombre: "caramelo3",
      precio: 13,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      img: "../assets/Imagenes/caramelos.png",
      alt: "dsd"
    },

    {
      id: 4,
      nombre: "caramelo4",
      precio: 13,
      disponibilidad: true,
      oferta: false,
      descuento: 0,
      img: "../assets/Imagenes/caramelos.png",
      alt: "dsd"
    },
  ]
}
