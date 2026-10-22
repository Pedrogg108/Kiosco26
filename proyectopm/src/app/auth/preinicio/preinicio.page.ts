import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-preinicio',
  templateUrl: './preinicio.page.html',
  styleUrls: ['./preinicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule]
})
export class PreinicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
