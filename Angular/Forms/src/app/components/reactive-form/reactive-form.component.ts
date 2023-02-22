import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, tap, merge, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  itemlist: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];
  form!: FormGroup;
  selectedValues: string[] = [];
  // sbp = new Subscription();

  notifier$ = new Subject();

  get selectAll(): FormControl {
    return this.form.get('selectAll') as FormControl;
  }
  get options(): FormGroup {
    return this.form.get('options') as FormGroup;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectAll: false,
      options: this.fb.group(
        this.itemlist.reduce((acc: { [key: string]: boolean }, cur: string) => {
          acc[cur] = false;
          return acc;
          // return {...acc, [cur]: false};
        }, {})
      ),
    });
    this.trackallitem();
    this.selectAllHandler();
  }

  ngOnDestroy(): void {
    // this.sbp.unsubscribe();
    this.stopObs();
  }

  onClickHandler() {
    this.stopObs();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  stopObs() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  private trackallitem() {
    const inputFCValueChanges = this.itemlist.map((item: string) => {
      return this.options.get(item)?.valueChanges.pipe(
        tap((val) => {
          if (val && !this.selectedValues.includes(item)) {
            this.selectedValues.push(item);
          } else if (!val) {
            this.selectedValues = this.selectedValues.filter(
              (str) => str !== item
            );
          }

          this.selectAll.setValue(
            this.itemlist.length === this.selectedValues.length,
            { emitEvent: false }
          );
        })
      );
    });

    merge(...inputFCValueChanges)
      .pipe(takeUntil(this.notifier$))
      .subscribe();

    // this.itemlist.forEach((item: string) => {
    //   this.options.get(item)?.valueChanges.subscribe((val) => {
    //     if (val && !this.selectedValues.includes(item)) {
    //       this.selectedValues.push(item);
    //     } else if (!val) {
    //       this.selectedValues = this.selectedValues.filter(
    //         (str) => str !== item
    //       );
    //     }

    //     this.selectAll.setValue(
    //       this.itemlist.length === this.selectedValues.length,
    //       { emitEvent: false }
    //     );
    //   });
    // });
    // console.log(this.options);
  }
  private selectAllHandler() {
    // this.sbp.add(
    this.selectAll.valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((val) => {
        this.setAllItemsValue(val);
      });
    // );
  }
  private setAllItemsValue(boo: boolean) {
    Object.values(this.options.controls).forEach((control) => {
      control.setValue(boo);
    });
  }
}
