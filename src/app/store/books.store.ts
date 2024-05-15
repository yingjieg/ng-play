import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { BooksService } from '../user-list/books.service';
import { firstValueFrom } from 'rxjs';

export type Book = {
  title: string;
  author: string;
  date: string;
};

type BookState = {
  books: Book[];
  loading: boolean;
  filter: {
    query: string;
    order: 'asc' | 'desc';
  };
};

const initialState: BookState = {
  books: [],
  loading: false,
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  withState(initialState),
  withComputed(({ books, filter }) => ({
    booksCount: computed(() => books.length),
    sortedBooks: computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return books().sort((a, b) => direction * a.title.localeCompare(b.title));
    }),
  })),
  withMethods((store, booksService = inject(BooksService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, { loading: true });

      const books = await firstValueFrom(booksService.getAllBooks());
      patchState(store, { books, loading: false });
    },
  }))
);
