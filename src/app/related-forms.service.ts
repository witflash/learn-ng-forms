import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RelatedFormsService {

  separateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public formData: any[] = [
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
      type: 'formGroup',
      groupName: 'fieldsUA',
      controls: [
        {
          type: 'text',
          name: 'passSerial',
          label: 'Passport Serial',
          value: '',
        },
        {
          type: 'text',
          name: 'passNumber',
          label: 'Passport Number',
          value: '',
        },
        {
          type: 'text',
          name: 'inn',
          label: 'IIN',
          value: '',
        },
      ],
      related: {
        parent: 'country',
        value: 'UA'
      }
    },
    {
      type: 'formGroup',
      groupName: 'fieldsUS',
      controls: [
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
      ],
      related: {
        parent: 'country',
        value: 'US'
      },
    },
  ]

  public currentData: any[] = [];

  public relatedData = {};

  initForm() {
    this.buildCurrent(this.formData);
    this.separateForm = this.createGroup(this.currentData);
  }

  createGroup(array) {
    const formControls = {};
    for (let i = 0; i < array.length; i += 1) {
      const nextElement = array[i];
      if (nextElement.type === 'formGroup') {
        formControls[nextElement.groupName] = this.createGroup(nextElement.controls);
        continue;
      }
      formControls[nextElement.name] = [{ value: ''}];
    }
    return this.formBuilder.group(formControls);
  }

  buildCurrent (data) {
    for (let i = 0; i < data.length; i += 1) {
      const next = data[i];
      if (next.type === 'formGroup') {
        if(next.related.value === this.relatedData[next.related.parent]) {
          this.currentData.push(next);
        }
        } else {
          this.currentData.push(next);
        }
    }
  }

  updateForm (parent, value) {
    this.relatedData[parent] = value;
    this.currentData = [];
    this.buildCurrent(this.formData);
    this.separateForm = this.createGroup(this.currentData);
    console.log('this.currentData: ', this.currentData);
    console.log('this.separateForm: ', this.separateForm);
    return this.separateForm;
  }

  getForm () {
    return this.separateForm;
  }
}
