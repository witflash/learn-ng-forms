import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RelatedFormsService } from '../related-forms.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [RelatedFormsService]
})
export class FormBuilderComponent {

  constructor(private related: RelatedFormsService) {}

  public separateForm: FormGroup = this.related.separateForm;

  ngOnInit() {
    this.related.initForm();
    this.separateForm = (this.related.getForm());
  }

  submit() {
    console.log('This Form: ', this.separateForm.controls);
  }

  isFormGroup(item) {
    return item.type === 'formGroup';
  }
}
