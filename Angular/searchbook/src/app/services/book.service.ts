import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  booklist: any = [];
  booklist$ = new Subject();

  wishlist = [];
  wishlist$ = new Subject();

  constructor(private http: HttpClient) {}

  getBooks(bookname: string) {
    if (bookname.trim() === '') return of(0);

    return this.http.get(this.baseUrl + bookname).pipe(
      tap((response: any) => {
        this.booklist = response.tims;
        this.booklist$.next(this.booklist);
      })
    );
  }
}
