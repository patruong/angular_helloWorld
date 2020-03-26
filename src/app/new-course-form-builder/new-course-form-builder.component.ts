import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form-builder',
  templateUrl: './new-course-form-builder.component.html',
  styleUrls: ['./new-course-form-builder.component.css']
})
export class NewCourseFormBuilderComponent {
  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

}
