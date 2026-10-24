
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent,IonHeader,IonTitle,IonToolbar,IonModal,IonButtons,IonButton,IonItem,IonInput} from '@ionic/angular/standalone';
import Swal from 'sweetalert2'; //se importo la libreria sweetalert2 para poder usar mejores alerts
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonModal,
    IonButtons,
    IonButton,
    IonItem,
    IonInput
  ]
})
export class CuentaPage implements OnInit {

  modalEditarPerfil = false;

  modalCambiarContrasena = false;
  constructor(private router: Router) { }

  ngOnInit() { }

  cerrarSesion() {
    Swal.fire({ //swal.fire es un alert que viene importado de la libreria sweetalert2
      title: '¿Está seguro de que quiere cerrar sesión?',
      text: 'Tendrá que volver a iniciar sesión para ingresar.',
      heightAuto: false,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2f6f7e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
      customClass: {
        container: 'swal-on-top'
      }
    }).then((result) => {
      if (result.isConfirmed) {//si se acepta cambia a la ruta de preinicio
        this.router.navigate(['/preinicio']);
      }
    });
  }
}
