import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
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
        this.itemlist.reduce((acc: any, cur: string) => {
          acc[cur] = false;
          return acc;
        }, {})
      ),
    });
    this.trackallitem();
    this.selectAllHandler();
  }

  trackallitem() {
    this.itemlist.forEach((item: string) => {
      this.options.get(item)?.valueChanges.subscribe((val) => {
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
      });
    });
    console.log(this.options);
  }

  selectAllHandler() {
    this.selectAll.valueChanges.subscribe((val) => {
      this.setAllItemsValue(val);
    });
  }
  setAllItemsValue(boo: boolean) {
    Object.values(this.options.controls).forEach((control) => {
      control.setValue(boo);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
