import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Questions } from '../models/questions';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  imports: [MatSliderModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})
export class Feedback {

questions: Array<Questions> = [
  new Questions('Joelin arvosana'),
  new Questions('Teemun arvosana '),
  new Questions('Aapen arvosana',)
];

onInputChange(event: any, question: Questions) {
  console.log(event.target.value);
  question.setFeedback(event.target.value);
}
}
