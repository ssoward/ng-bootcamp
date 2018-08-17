import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnDestroy {
  filters: FormGroup;
  valueSub: Subscription;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)]
    });

    this.valueSub = this.filters.valueChanges.subscribe(value => {
      console.log('The Form Changed! ', value);
    });
  }

  submit() {
    console.log('Form was Submitted!');
  }

  ngOnDestroy() {
    this.valueSub.unsubscribe();
  }

}
