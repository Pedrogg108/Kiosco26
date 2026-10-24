import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule } from '@angular/forms';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class InicioSesionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formularioInicioSesion = new FormGroup({//se crea un nuevo formGroup con el nombre "formularioInicioSesion"
    correo: new FormControl('', [//Se crearan controles para el correo
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.email//valida que el campo sea un email valido osea con el @
    ]),

    contra:new FormControl('',[//Se crearan controles para el contra
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.minLength(7),//valida que el campo tenga como minimo 7 caracteres

    ]),
    contra2:new FormControl('',[//Se crearan controles para el contra2
      Validators.required,//valida que el campo tenga algo, osea que es obligatorio
      Validators.minLength(7)//valida que el campo tenga como minimo 7 caracteres
    ])
})

}
