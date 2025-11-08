import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calculator',
  imports: [MatInputModule, FormsModule, MatButtonModule, CommonModule, MatGridListModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',

})
export class Calculator {

  buttons: string[] = ['7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+'];

  result = '';

  addValue(value: string) {
    console.log('addValue value:' + value);


    if (value == '=') {
      console.log('lausekkeen arvo on:' + eval?.(this.result));

      this.result = eval?.(this.result);


    }
    else if (value == 'C') {
      this.result = '';

    }

    else {
      this.result += value;
    }

  }




}