import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.component.html',
  styleUrls: ['./form-reg.component.scss']
})
export class FormRegComponent {
  regForm: FormGroup;

  constructor() {
    this.regForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'subscribe': new FormControl('false'),
      'phones': new FormArray([
        new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      ]),
      'email': new FormControl({value: '', disabled: true}, [Validators.required, Validators.email]),
      'confirm': new FormControl('', [Validators.required, this.confirmValidator])
    })
  }

  ngOnInit() {
    this.regForm.controls['subscribe'].valueChanges.subscribe(value => {
      this.regForm.get('email')[value === 'true' ? 'enable' : 'disable']();
    });
  }

  submit() {
    console.log(this.regForm.controls['subscribe']);
  }

  confirmValidator(control: FormControl): {[s:string]:boolean} {
    if(control.value === false) {
      return {'confirm': true};
    }
    return null;
  }

  addPhone() {
    (<FormArray>this.regForm.controls['phones']).push(new FormControl('', Validators.required));
  }

  removePhone() {
    (<FormArray>this.regForm.controls['phones']).removeAt(-1);
  }

}
