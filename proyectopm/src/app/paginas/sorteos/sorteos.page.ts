import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import Swal from 'sweetalert2';


interface Sorteo {//se crea una interface en la cual se basara el arreglo de productosSorteos
  id: number,
  titulo: string,
  descripcion: string,
  img: string,
  alt: string,
  fechaInicio: string,
  fechaCierre: string,
  participantes: number,
  participando: boolean
}


@Component({
  selector: 'app-sorteos',
  templateUrl: './sorteos.page.html',
  styleUrls: ['./sorteos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class SorteosPage implements OnInit {
  activo = true;
  constructor() { }

  productosSorteos: Sorteo[] = [//se crea el arrglo productosSorteos basado en la interfaz Sorteo
    {
      id: 1,
      titulo: "Promo Dulce",
      descripcion: "Incluye 2 alfajores rasta y una lata de Coca Cola",
      img: "../assets/Imagenes/caramelos.png",
      alt: "Promo dulce",
      fechaInicio: "11-10-2026",
      fechaCierre: "25-10-2026",
      participantes: 0,
      participando: false
    },
    {
      id: 2,
      titulo: "Unas Saladix y 2 alfajores",
      descripcion: "Incluye un Saladix y 2 alfajores a eleccion",
      img: "../assets/Imagenes/combo2.jpeg",
      alt: "Promo Saladix+Alfajores",
      fechaInicio: "11-10-2026",
      fechaCierre: "31-10-2026",
      participantes: 0,
      participando: false
    }
  ]
  sorteoParticipando: Sorteo[] = []//se crea otro arreglo llamado sorteoParticipando basado en la interfaz Sorteo para guardar los sorteos a los que el usuario esta participando

  ngOnInit() {
  }

  // get participantes():number{
  //   return 1
  // }
  get participando() {
    return this.sorteoParticipando//Se retorna el arreglo SorteoParticipando
  }
  get sorteosDisponibles(): Sorteo[] {
    return this.productosSorteos.filter(p => !p.participando);//filtra los sorteos por los cual aun no esta participando
  }
  get sorteosParticipando(): Sorteo[] {
    return this.productosSorteos.filter(p => p.participando)//filtra los sorteos por los cual si esta participando
  }

  participarSorteo(p: Sorteo) {//recibe como parametro el sorteo basado en la interfaz Sorteo

    if (p) {
      this.sorteoParticipando.push(p)//metete el objeto al arreglo sorteoParticipando
      p.participantes++//aumenta los participantes del sorteo
      p.participando = true//ahora si esta participando 
    }

    Swal.fire({
      title: 'Ahora estas participando del sorteo',
      text: '¡Buena suerte!',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      heightAuto: false
    });
  }

}
