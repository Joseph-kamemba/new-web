import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-changes',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './changes.component.html',
  styleUrl: './changes.component.css'
})
export class ChangesComponent {
  @Input() value!: string;
  inputValue: string= '';
  counter: number = 0;

  ngOnChanges(changes: SimpleChanges){
    console.log('Previous value:', changes['value'].previousValue);
    console.log('Current value:', changes['value'].currentValue);
    console.log('Parent inputValue:', this.inputValue);

  }

  ngOnInit() {
    console.log('Component has been initialized');
  }

  ngDoCheck() {
    console.log('Change detection cycle triggered');
  }
}
