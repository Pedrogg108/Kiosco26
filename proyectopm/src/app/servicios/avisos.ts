import { Injectable } from '@angular/core';
import { Aviso } from '../models/aviso';
@Injectable({
  providedIn: 'root',
})
export class Avisos {
  avisos:Aviso[]=[//arreglo de avisos basado en la interfaz Aviso
    {
      id:1,
      titulo:"Nuevo horario",
      descripcion:"El horario del kiosco pasa de las 9:20 a las 10:50",
      fecha:"25/10/2026",
      categoria:"Infomacion"
     },
     {
      id:2,
      titulo:"Nuevo Sorteo activo",
      descripcion:"Nuevo sorteo por una promo dulce",
      fecha:"20/10/2026",
      categoria:"Sorteos"
     },
     {
      id:3,
      titulo:"Descubre nuevas ofertas disponibles",
      descripcion:"Nuevas ofertas ",
      fecha:"21/10/2026",
      categoria:"Ofertas"
     }
  ]
}
