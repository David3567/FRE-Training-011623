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
  // obs$ = new Observable((observer) => {
  //   console.log('Observable starts');

  //   for (let i = 0; i < 5; i++) {
  //     setTimeout(() => {
  //       observer.next(i + 1 + '');
  //     }, (i + 1) * 1000);
  //   }
  // });

  obs$!: Observable<any>;
  @ViewChild('btn', { static: true }) btn!: ElementRef;
  // @ViewChild(ItemComponent) item!: ItemComponent;
  private url = 'https://jsonplaceholder.typicode.com/user';

  users: MyUser[] = [];
  subscription!: Subscription;
  subject$ = new Subject();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subject$.subscribe((val) => {
      console.log('1st: ', val);
    });

    this.subject$.next('1');
    this.subject$.next('2');

    this.subject$.subscribe((val) => {
      console.log('2nd: ', val);
    });
    this.subject$.next('3');
    this.subject$.next('4');

    this.subject$.subscribe((val) => {
      console.log('3rd: ', val);
    });
    this.subject$.next('5');

    // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
    //   .pipe(
    //     tap((num) => console.log('1st: ', num)),
    //     tap((num) => console.log('2nd: ', num)),
    //     take(2),
    //   )
    //   .subscribe();

    // this.subscription = interval(100).pipe(tap(console.log)).subscribe();

    // const Users$: Observable<MyUser[]> = this.http.get<User[]>(this.url).pipe(
    //   // tap((data) => {
    //   //   console.log('first time check data: ', data);
    //   // }),
    //   map((x: User[]) => {
    //     return x.map((user: User) => {
    //       return { name: user.name };
    //     }); // [.....]
    //   }),
    //   tap((data) => {
    //     console.log('2nd time check data: ', data);
    //   })
    // );

    // Users$.subscribe();
    // this.obs$ = of([1, 2, 3, 4, 5]).pipe(
    //   map((arr) => {
    //     return arr.map((num) => num + 3);
    //     // [....]
    //     // 4
    //     // 5
    //     // 6
    //     // 7
    //   })
    // );
    // this.obs$ = from([1, 2, 3, 4, 5]);
    // fn.call(obj, 1, 2, 3, 4, 5), fn.apply(obj, [1, 2, 3, 4, 5]);

    // const liseningBtn$ = fromEvent(this.btn.nativeElement, 'click');
    // liseningBtn$.subscribe((x) => {
    //   console.log('event x: ', x);

    //   this.obs$.subscribe((data) => {
    //     console.log(data);
    //   });
    // });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  triggerObs() {
    console.log('stop it');

    // this.obs$.subscribe((data) => {
    //   console.log(data);
    // });
    // this.item.methodInItem();
  }
}
