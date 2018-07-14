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

  constructor(private formBuilder: FormBuilderComponent) {}

  ngOnInit() {
    // console.log('input-text > index: ', this.index);
  }

  getInput(input) {
    console.log(input)
  }

  checkLinked() {
    // console.log(this);
  }

  getControlName() {
    // console.log('index: ', this.index);
    // console.log('item: ', this.item);
    if (this.index !== undefined) {
      // console.log('this.index: ', this.index);
      // console.log('textInput: ', this.textInput)
      return this.index;
    } else {
      return this.item.name;
    }
  }

}
