import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'searchbook';

  constructor() {
    const book: Book = {
      id: 23,
      author: 'TT',
    } as Book;
  }
}

interface Book {
  id: number;
  publisher: string;
  author: string;
}
