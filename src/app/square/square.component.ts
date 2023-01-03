import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: [],
})
export class SquareComponent {
  @Input() public value: 'X' | 'O' = 'X';
}
