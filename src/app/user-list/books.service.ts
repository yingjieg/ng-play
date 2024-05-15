import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../store/books.store';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // private http = inject(HttpClient);

  constructor() {}

  getAllBooks(): Observable<Book[]> {
    return of([]);
  }
}
