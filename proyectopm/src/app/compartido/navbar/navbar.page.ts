import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar]
})
export class NavbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
