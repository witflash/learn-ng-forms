import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() item;
  @Input() index;
  @Input('group') separateForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('inputs > item: ', this.item);
    console.log('inputs > index: ', this.index);
  }
}
