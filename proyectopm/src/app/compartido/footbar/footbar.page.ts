import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.page.html',
  styleUrls: ['./footbar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class FootbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
