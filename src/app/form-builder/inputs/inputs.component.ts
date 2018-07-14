import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  @Input() item;
  @Input() index;
  @Input('group') parentFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    // console.log(this.item);
  }

  isText() {
    const textInputs = ['text', 'email', 'date'];
    const isText = textInputs.includes(this.item.type);
    return isText;
  }
}
