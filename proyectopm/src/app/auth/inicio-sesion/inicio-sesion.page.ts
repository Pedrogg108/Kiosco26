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

  formularioInicioSesion = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    contra:new FormControl('',[
      Validators.required,
      Validators.minLength(7),

    ]),
    contra2:new FormControl('',[
      Validators.required
    ])
})

}
