import { Component } from '@angular/core';
import { RelatedFormsService } from '../related-forms.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [RelatedFormsService]
})
export class FormBuilderComponent {

  constructor(private related: RelatedFormsService) {}

  ngOnInit() {
    this.related.initForm();
  }

  submit() {
    console.log('This Form: ', this.related.separateForm.controls);
  }

  isFormGroup(item) {
    return item.type === 'formGroup';
  }
}
