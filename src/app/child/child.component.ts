import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() value: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Value changed:', changes['value'].currentValue);
    console.log('Child value received:', this.value);
  }


}
