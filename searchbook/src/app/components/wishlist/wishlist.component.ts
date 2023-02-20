import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist$: Subject<any> = new Subject();
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.wishlist$ = this.bookService.wishlist$;
  }

  deleteBook(id: string) {
    this.bookService.removeBook(id);
  }
}
