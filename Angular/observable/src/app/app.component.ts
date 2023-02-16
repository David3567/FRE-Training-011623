import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  Observable,
  of,
  Subject,
  Subscription,
  throwError,
} from 'rxjs';
import { map, tap, take, catchError } from 'rxjs/operators';
import { ItemComponent } from './item/item.component';
import { User, MyUser } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  obs$!: Observable<any>;
  @ViewChild('btn', { static: true }) btn!: ElementRef;

  private url = 'https://jsonplaceholder.typicode.com/';

  users: MyUser[] = [];
  subscription!: Subscription;
  subject$ = new Subject();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.url + 'user')
      .pipe(
        // tap((_) => {
        //   throw new Error('hello');
        // })
        catchError((err) => {
          return throwError(() => 'hello');
        }) // switchMap, mergeMap, ...
      )
      .subscribe(
        (data) => console.log(data),
        (err) => console.log('catch error: ', err)
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  triggerObs() {
    console.log('stop it');
  }
}
