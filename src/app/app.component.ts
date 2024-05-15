import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { PagerComponent } from './components/pager/pager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  imports: [RouterOutlet, UserListComponent, CounterComponent, PagerComponent],
})
export class AppComponent {
  title = 'ng-demo';
  counter = 0;
  page = 1;
  pageCount = 10;

  handlePageChange(p: number) {
    console.log(p);
    console.log('+++');
    this.page = p;
  }
}
