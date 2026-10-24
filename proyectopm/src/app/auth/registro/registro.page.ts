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
  formularioRegistro = new FormGroup({//se crea un nuevo formGroup con el nombre "formularioRegistro"
    nombre: new FormControl('', [
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)//valida que el campo tenga solo letras
    ]),

    apellido: new FormControl('', [
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)//valida que el campo tenga solo letras
    ]),

    telefono: new FormControl('', [
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.pattern(/^[0-9]+$/)//valida que el campo tenga solo numeros
    ]),

    correo:new FormControl('',[
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.email//valida que el campo sea un email valido osea con el @
    ]),

    contra:new FormControl('',[
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.minLength(7),//valida que el campo tenga como minimo 7 caracteres
      Validators.pattern(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/)//Verifica que el campo contenga una mayúscula y un carácter especial
    ])
  })
   
}
