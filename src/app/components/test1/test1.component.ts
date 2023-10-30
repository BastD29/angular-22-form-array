import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      myFormArray: this.fb.array([]),
    });
  }

  get myFormArray() {
    return this.myForm.get('myFormArray') as FormArray;
  }

  addItem() {
    this.myFormArray.push(this.fb.control(''));
  }

  onSubmit() {
    console.log('Submitted Value:', this.myForm.value);
  }
}
