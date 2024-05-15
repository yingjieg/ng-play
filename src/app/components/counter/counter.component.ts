import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ counter() }}</span>
      <button (click)="increment()">+</button>
    </div>
  `,
  styleUrl: './counter.component.less',
})
export class CounterComponent {
  counter = model(0);

  increment() {
    this.counter.update((c) => c + 1);
  }

  decrement() {
    this.counter.update((c) => c - 1);
  }
}
