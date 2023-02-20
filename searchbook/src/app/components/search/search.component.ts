import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, fromEvent, mergeMap, Subscription, switchMap } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  bookname: string = '';
  @ViewChild('inputbook', {static: true}) inputbox!: ElementRef;
  subsq = new Subscription();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.subsq = fromEvent(this.inputbox.nativeElement, 'keyup').pipe(
      debounceTime(500),
      mergeMap((_) => {
        return this.bookService.getBooks(this.bookname)
      })
    )
    .subscribe()
  }

  ngOnDestroy(): void {
    this.subsq.unsubscribe()
  }
}
