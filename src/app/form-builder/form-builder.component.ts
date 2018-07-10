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
      label: 'First Name',
      value: '',
    },
    {
      type: 'text',
      name: 'userLastName',
      label: 'Last Name',
      value: '',
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      options: [
        { key: 'man', label: "Man" },
        { key: 'woman', label: 'Woman' }
      ],
    },
    {
      type: 'date',
      name: 'date',
      label: 'Birthday Date',
      value: '',
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      options: [
        {name: 'Ukraine', value: 'UA'},
        {name: 'USA', value: 'US'}
      ]
    },
    {
      type: 'text',
      name: 'city',
      label: 'City',
      value: '',
    },
    {
      type: 'text',
      name: 'passSerial',
      label: 'Passport Serial',
      value: '',
      related: {
        parent: 'Country',
        value: 'UA'
      }
    },
    {
      type: 'text',
      name: 'passNumber',
      label: 'Passport Number',
      value: '',
      related: {
        parent: 'Country',
        value: 'UA'
      }
    },
    {
      type: 'text',
      name: 'inn',
      label: 'IIN',
      value: '',
      related: {
        parent: 'Country',
        value: 'UA'
      }
    },
    {
      type: 'text',
      name: 'driverLicense',
      label: 'Driver License',
      value: '',
    },
    {
      type: 'text',
      name: 'ssn',
      label: 'SSN',
      value: '',
    },
    {
      type: 'text',
      name: 'insurance',
      label: 'Insurance Number',
      value: '',
    },
  ]

  // public formFields: any[] = [
  //   {
  //     type: 'text',
  //     name: 'userName',
  //     label: 'Name',
  //     value: '',
  //     required: true,
  //   },
  //   {
  //     type: 'radio',
  //     name: 'userSubscribe',
  //     label: 'Do you want to subscribe?',
  //     required: true,
  //     options: [
  //       { key: '', label: "Don't subscribe" },
  //       { key: 'true', label: 'Subscribe' }
  //     ],
  //     linked: 'userEmail'
  //   },
  //   {
  //     type: 'text',
  //     name: 'userEmail',
  //     label: 'Email',
  //     value: '',
  //     disabled: true,
  //     required: false,
  //   },
  //   [
  //     {
  //       type: 'text',
  //       name: 'userPhone',
  //       label: 'Phone',
  //       value: '',
  //       required: true
  //     }
  //   ],
  //   {
  //     type: 'select',
  //     name: 'gender',
  //     label: 'Your gender:',
  //     required: true,
  //     options: [
  //       { name: '', value: ''},
  //       { name: 'Man', value: 'man'},
  //       { name: 'Woman', value: 'woman'},
  //     ]
  //   }
  // ];

  ngOnInit() {
    this.fieldBuilder();
  }

  fieldBuilder() {
    const formControls = {};
    for (let i = 0; i < this.formFields.length; i += 1) {
      const control = this.formFields[i];
      if (Array.isArray(control)) {
        formControls[control[0].name] = this.formBuilder.array([this.formBuilder.control('')]);
      } else {
        formControls[control.name] = [{ value: '', disabled: this.checkRelated(control.related)}];
      }
    }
    this.separateForm = this.formBuilder.group(formControls);
    console.log('separateForm: ', this.separateForm);
  }

  checkRelated(related) {
    let isRelated;
    isRelated = !!related;
    return isRelated
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
