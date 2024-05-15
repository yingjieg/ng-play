import { Component, input, model } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.less',
})
export class TodoListComponent {
  taskList: any[] = [
    {
      title: 'task 1',
      status: 'todo',
    },
    {
      title: 'task 2',
      status: 'running',
    },
    {
      title: 'task 3',
      status: 'complete',
    },
  ];
  newTask = new FormControl<string>('', Validators.required);
  errorMsg = '';

  addTask() {
    const title = this.newTask.value;
    if (!title) {
      this.errorMsg = 'can not empty';
      return;
    }

    this.taskList.push({
      title,
      status: 'todo',
    });
  }

  // onChange(event: any) {
  //   console.log(event);
  //   this.newTask = event.target.value;
  // }
}
