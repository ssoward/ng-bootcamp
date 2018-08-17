import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  details: FormGroup;

  ngOnInit() {
  }
  constructor(fb: FormBuilder) {
    this.details = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      middleInitial: ['', Validators.maxLength(1)],
      position: ['Sales', Validators.minLength(3)],
      department: [''],
      immediateSupervisor: [''],
      phoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)],
      email: ['', [Validators.email, Validators.required]],
      status: ['Active', Validators.required]
    });

    this.details.valueChanges.subscribe(form => {
      console.log(form);
    });
  }

  saveEmployeeDetails(): void {
    console.log('Form Submitted', this.details.value);
  }

  logTheForm(): void {
    console.log('form: ', this.details);
  }

}

