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
  @Input('group') textInput: FormGroup;

  constructor(private formBuilder: FormBuilderComponent) {}

  ngOnInit() {
  }

  getInput(input) {
    console.log(input)
  }

}
