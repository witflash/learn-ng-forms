import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss']
})
export class InputArrayComponent implements OnInit {
  @Input() item;
  @Input('group') separateForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.item);
  }

  get formArray(): FormArray{
    return this.separateForm.get(this.item.name) as FormArray;
  }

  addPhone() {
    let control = this.fb.control('');
    console.log(this.formArray);
    this.formArray.push(control);
  }

  removePhone() {
    this.formArray.removeAt(-1);
  }
}
