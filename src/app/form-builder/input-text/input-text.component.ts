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
  @Input('group') textInput: FormGroup;

  constructor(private formBuilder: FormBuilderComponent) {}

  ngOnInit() {
    console.log('input-text > index: ', this.index);
  }

  getInput(input) {
    console.log(input)
  }

  checkLinked() {
    console.log(this);
  }

}
