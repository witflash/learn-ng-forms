import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})

export class InputSelectComponent implements OnInit {
  @Input() item;
  @Input('group') selectInput: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
