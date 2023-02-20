import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  debounceTime,
  fromEvent,
  mergeMap,
  Subscription,
  switchMap,
} from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  bookname: string = '';
  subsq = new Subscription();
  // @ViewChild('inputbook', { static: true }) inputbox!: ElementRef;

  form!: FormGroup;

  constructor(private bookService: BookService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      bookinput: '',
    });

    // this.subsq = fromEvent(this.inputbox.nativeElement, 'keyup')
    this.form
      .get('bookinput')
      ?.valueChanges.pipe(
        debounceTime(500),
        mergeMap((_) => {
          return this.bookService.getBooks(this.bookname);
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }
}
