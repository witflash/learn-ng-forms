import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  separateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    const formControls = {};
    for (let i = 0; i < this.formFields.length; i += 1) {
      const control = this.formFields[i];
      formControls[control.name] = ['', [Validators.required]];
    }
    this.separateForm = this.formBuilder.group(formControls);
  }

  public formFields: any[] = [
    {
      type: 'text',
      name: 'userName',
      label: 'Name',
      value: '',
      required: true,
    },
    {
      type: 'radio',
      name: 'userSubscribe',
      label: 'Do you want to subscribe?',
      required: true,
      options: [
        { key: '', label: "Don't subscribe" },
        { key: 'true', label: 'Subscribe' }
      ]
    },
    {
      type: 'text',
      name: 'userEmail',
      label: 'Email',
      value: '',
      required: false,
    },
    {
      type: 'select',
      name: 'gender',
      label: 'Your gender:',
      required: true,
      option: [
        { key: '', value: ''},
        { key: 'Man', value: 'man'},
        { key: 'Woman', value: 'woman'},
      ]
    }
  ];

  ngOnInit() {
  }

}
