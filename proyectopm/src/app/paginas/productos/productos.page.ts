import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProductosService } from 'src/app/servicios/productos-service';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class ProductosPage implements OnInit {

  constructor(private productosService:ProductosService) { }
  get Productos(){
    return this.productosService.Productos
  }
  ngOnInit() {
  }
  // Productos: Producto[] = [
  //   {
  //     id: 1,
  //     nombre: "caramelo",
  //     precio: 12,
  //     disponibilidad: true,
  //     oferta: false,
  //     descuento: 0,
  //     img: "../assets/Imagenes/caramelos.png",
  //     alt: "dsd"
  //   },

  //   {
  //     id: 2,
  //     nombre: "caramelo2",
  //     precio: 13,
  //     disponibilidad: true,
  //     oferta: false,
  //     descuento: 0,
  //     img: "../assets/Imagenes/caramelos.png",
  //     alt: "dsd"
  //   },

  //   {
  //     id: 3,
  //     nombre: "caramelo3",
  //     precio: 13,
  //     disponibilidad: true,
  //     oferta: false,
  //     descuento: 0,
  //     img: "../assets/Imagenes/caramelos.png",
  //     alt: "dsd"
  //   },

  //   {
  //     id: 4,
  //     nombre: "caramelo4",
  //     precio: 13,
  //     disponibilidad: true,
  //     oferta: false,
  //     descuento: 0,
  //     img: "../assets/Imagenes/caramelos.png",
  //     alt: "dsd"
  //   },
  // ]
}
