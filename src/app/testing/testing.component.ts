import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  title = 'Hello Julls';
  isVisible = true;
  items: string[]=['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  changeTitle() {
    this.title = 'Title Has Been Changed'
  }

  toggleVisibility(){
    this.isVisible = !this.isVisible
  }

}
