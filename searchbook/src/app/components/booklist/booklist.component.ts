import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, of, Subject, switchMap } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  @ViewChild('book') bookCard!: ElementRef;
  booklist$: Subject<any> = new Subject();
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booklist$ = this.bookService.booklist$;
  }

  addBook(id: string) {
    this.bookService.addBook(id);
  }

}