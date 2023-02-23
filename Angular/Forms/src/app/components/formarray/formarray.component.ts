import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss'],
})
export class FormarrayComponent implements OnInit {
  skillsForm!: FormGroup;

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([
        // this.fb.group({
        //   skill: '',
        //   exp: '',
        // })
        // this.fb.group({}),
        // this.fb.group({}),
        // this.fb.group({}),
        // this.fb.group({}),
        // this.fb.group({}),
        // this.fb.group({}),
        // this.fb.group({}),
      ]),
    });
  }

  newSkill() {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }
  addSkill() {
    this.skills.push(this.newSkill());
  }
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}

// const form = {
//   email: 'test@test',
//   pwd: {
//     password: '1234',
//     confirm: '1234'
//   },
//   arr:
//     {
//       name:
//       age:
//       arr1: [

//       ]
//     },
//
// }
