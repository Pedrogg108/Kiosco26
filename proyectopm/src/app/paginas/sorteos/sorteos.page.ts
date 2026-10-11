import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import Swal from 'sweetalert2';
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

  ngOnInit() {
  }
  participarSorteoAlerta() {
    Swal.fire({
      title: 'Ahora estas participando del sorteo',
      text: '¡Buena suerte!',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      heightAuto: false
    });
  }
}
