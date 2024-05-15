import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul style="display: flex; list-style: none;">
      @for (item of getPages(); track $index) {
      <div>
        <li
          style="padding: 24px; color: red;"
          *ngIf="page === item; else elseBlock"
        >
          <b>{{ item }}</b>
        </li>
        <ng-template #elseBlock>
          <li style="padding: 24px">{{ item }}</li>
        </ng-template>
      </div>
      }
    </ul>
    <div style="padding: 24px;">
      <button (click)="goPrevious()">Prev</button>
      <button (click)="goNext()">Next</button>
    </div>
  `,
  styles: ``,
})
export class PagerComponent {
  @Input() page = 1;
  @Input() pageCount = 1;
  @Output() pageChange = new EventEmitter<number>();

  currentPage = signal(1);

  previousPage = computed(() => {
    return this.currentPage() > 1 ? this.currentPage() - 1 : this.currentPage();
  });

  nextPage = computed(() => {
    return this.currentPage() < this.pageCount
      ? this.currentPage() + 1
      : this.currentPage();
  });

  // currentPage = 1;
  // previousPage = 1;
  // nextPage = 1;

  jumpTo(num: number) {
    console.log(num);
    if (num < 1 || num > this.pageCount) {
      return;
    }
    console.log('???');

    // this.currentPage = num;
    this.currentPage.set(num);

    console.log('current page: ', this.currentPage);
    this.pageChange.emit(num);

    // if (this.currentPage() > 1) {
    //   this.previousPage = num - 1;
    // }

    // if (this.currentPage + 1 <= this.pageCount) {
    //   this.nextPage = num + 1;
    // }
  }

  goPrevious() {
    this.jumpTo(this.currentPage() - 1);
  }

  goNext() {
    this.jumpTo(this.currentPage() + 1);
  }

  getPages() {
    return Array.from({ length: this.pageCount }, (_, index) => index + 1);
  }
}
