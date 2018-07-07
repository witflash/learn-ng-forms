import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})

export class InputRadioComponent {
  @Input() item;
  @Input('group') separateForm: FormGroup;

  constructor() {}

  ngOnInit() {
  }

  changeLinked() {
    console.log(this);
    const currentName = this.item.name;
    const linkedName = this.item.linked;
    const value = !!this.separateForm.controls[currentName].value;

    if (value) {
      this.separateForm.controls[linkedName].enable();
    } else {
      this.separateForm.controls[linkedName].disable();
    }
  }

}
