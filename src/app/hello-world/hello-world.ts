import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hello-world',
  imports: [FormsModule, MatButtonModule, CommonModule],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css',
})
export class HelloWorld {
  title = 'Front-End-Kurssi';
  itemImageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  onButtonClick() {


  }
}
