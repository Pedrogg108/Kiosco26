import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)
    ]),

    apellido: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)
    ]),

    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/)
    ]),

    correo:new FormControl('',[
      Validators.required,
      Validators.email
    ]),

    contra:new FormControl('',[
      Validators.required,
      Validators.minLength(7),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/)//Verifica que el campo contenga una mayúscula y un carácter especial
    ])
  })
   registrarse() {

    // Marca todos los campos como tocados
    this.formularioRegistro.markAllAsTouched();

    // Si hay algún campo inválido, no continúa
    if (this.formularioRegistro.invalid) {
      return;
    }

    console.log('Formulario válido');
    console.log(this.formularioRegistro.value);


  }
}
