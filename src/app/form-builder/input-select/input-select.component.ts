import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RelatedFormsService } from '../../related-forms.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})

export class InputSelectComponent {
  @Input() item;
  @Input('group') selectInput: FormGroup;

  value: string;

  constructor(private related: RelatedFormsService) { }

  updateForm(event) {
    this.related.updateForm(event.target.name, event.target.value);
  }

}
