import { Component, effect, inject } from '@angular/core';
import { BooksStore } from '../store/books.store';
import { JsonPipe } from '@angular/common';
import { getState } from '@ngrx/signals';
import { TodoListItemComponent } from '../components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.less',
  providers: [BooksStore],
  imports: [JsonPipe, TodoListItemComponent, TodoListComponent],
})
export class UserListComponent {
  readonly store = inject(BooksStore);

  constructor() {
    effect(() => {
      // The effect will be re-executed whenever the state changes.
      const state = getState(this.store);
      console.log('book state changed', state);
    });
  }
}
