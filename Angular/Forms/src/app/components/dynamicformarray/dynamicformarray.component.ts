import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamicformarray',
  templateUrl: './dynamicformarray.component.html',
  styleUrls: ['./dynamicformarray.component.scss'],
})
export class DynamicformarrayComponent implements OnInit {
  empForm: any;

  get employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }
  employeeSkills(empIndex: number): FormArray {
    return this.employees.at(empIndex).get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.empForm = this.fb.group({
      employees: this.fb.array([]),
    });
  }
  // create employee formArray;
  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([]),
    });
  }
  addEmployee() {
    this.employees.push(this.newEmployee());
  }
  removeEmployee(empIndex: number) {
    this.employees.removeAt(empIndex);
  }

  // create employees' skills formArray;
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }
  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }
  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
