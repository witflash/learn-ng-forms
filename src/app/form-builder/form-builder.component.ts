import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  @Output() i;

  separateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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
      ],
      linked: 'userEmail'
    },
    {
      type: 'text',
      name: 'userEmail',
      label: 'Email',
      value: '',
      disabled: true,
      required: false,
    },
    [
      {
        type: 'text',
        name: 'userPhone',
        label: 'Phone',
        value: '',
        required: true
      }
    ],
    {
      type: 'select',
      name: 'gender',
      label: 'Your gender:',
      required: true,
      options: [
        { name: '', value: ''},
        { name: 'Man', value: 'man'},
        { name: 'Woman', value: 'woman'},
      ]
    }
  ];

  ngOnInit() {
    const formControls = {};
    for (let i = 0; i < this.formFields.length; i += 1) {
      const control = this.formFields[i];
      if (Array.isArray(control)) {
        formControls[control[0].name] = this.formBuilder.array([this.formBuilder.control('')]);
      } else {
        formControls[control.name] = [{ value: '', disabled: control.disabled || false }];
      }
    }
    this.separateForm = this.formBuilder.group(formControls);
  }

  submit() {
    console.table(this.separateForm.controls);
  }

  isArray(item) {
    return Array.isArray(item);
  }

  notArray(item) {
    return !Array.isArray(item);
  }

}
