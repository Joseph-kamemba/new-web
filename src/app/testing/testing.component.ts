import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  title = 'Hello Julls, I love You Soo Much';
  isVisible = true;
  items: string[]=['Prctice Self-Care', 'Process Your Emotions',
     'Focus on Hobbies and Interests', 'Build a Support Network', 
     'Practive Mindfulness and Relaxation', 'Establish a Routine', 
     'Avoid Unhealthy Coping Mechanisms', 
     'Practice Forgiveness and Letting go',
      'Connect with Nature', 'Celebrate Small Wins'];

  message: string = '';
  imageUrl: string = 'images/babyboo.jpg';
  isDisabled: boolean = true;
  userInput: string = '';
  
  onButtonClick(): void {
    this.message = 'I love you Baby Boo'
  }


  changeTitle() {
    this.title = 'Title Has Been Changed'
  }

  toggleVisibility(){
    this.isVisible = !this.isVisible
  }

}
