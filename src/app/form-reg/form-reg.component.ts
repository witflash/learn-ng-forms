import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'email': new FormControl({value: '', disabled: true}, Validators.required),
    })
   }

   ngOnInit() {
     this.regForm.controls['subscribe'].valueChanges.subscribe(value => {
       console.log(value);
       this.regForm.get('email')[value == 'true' ? 'enable' : 'disable']();
     });
   }

  submit() {
    console.log(this.regForm.controls['subscribe']);
  }

}
