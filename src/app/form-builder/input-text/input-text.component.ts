import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderComponent } from '../form-builder.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() item;
  @Input() index;
  @Input('group') parentFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    // console.log(this.item);
  }

  getInput(input) {
    console.log(input)
  }

  getControlName() {
    if (this.index !== undefined) {
      return this.index;
    } else {
      return this.item.name;
    }
  }

}
