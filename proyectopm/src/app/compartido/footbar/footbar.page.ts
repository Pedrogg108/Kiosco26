import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.page.html',
  styleUrls: ['./footbar.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,RouterLink,RouterLinkActive]
})
export class FootbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
