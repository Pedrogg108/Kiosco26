import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FootbarPage } from 'src/app/compartido/footbar/footbar.page';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
  standalone: true,
  imports: [IonContent,FootbarPage, IonHeader, IonTitle,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle, IonToolbar, CommonModule, FormsModule]
})
export class NovedadesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
