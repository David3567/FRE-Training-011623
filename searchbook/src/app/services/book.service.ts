import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { of, Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  booklist: any = [];
  booklist$ = new Subject();

  wishlist: any = [];
  wishlist$ = new Subject();

  constructor(private http: HttpClient) { }

  getBooks(bookname: string) {
    if (bookname.trim() === '') return of(0);
    return this.http.get(this.baseUrl + bookname)
    .pipe(tap((response: any) => {
      this.booklist = response.items;
      this.booklist$.next(this.booklist)
    }));
  }
  
  addBook(bookid: string) {
    const book = this.booklist.find((item: any) => item.id === bookid);
    if (!this.wishlist.find((item: any) => item.id === bookid)) {
      this.wishlist.push(book);
      this.wishlist$.next(this.wishlist)
    }
  }
  removeBook(bookid: string) {
    this.wishlist = this.wishlist.filter((item: any) => item.id !== bookid);
    this.wishlist$.next(this.wishlist)
  }
}
