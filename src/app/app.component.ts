import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentIndex;
  form: FormGroup;

  sections = [
    {
      name: 'Section 1',
      content: 'Content1',
    },
    {
      name: 'Section 2',
      content: 'Content 2',
    },
    {
      name: 'Section 3',
      content: 'Content 3',
    },
  ];
  secc = [{ sec: 'dwwdw' }, { sec: 'frvfv' }, { sec: 'dcdc' }];

  expand(index) {
    if (this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
  }
}
