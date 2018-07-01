import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})

export class InputRadioComponent {
  @Input() item: <any>{};
  @Input('group') radioInput: FormGroup;

  constructor() {}

  ngOnInit() {
  }

}
