import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { FormRegComponent } from './form-reg/form-reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { InputTextComponent } from './form-builder/input-text/input-text.component';
import { InputRadioComponent } from './form-builder/input-radio/input-radio.component';
import { InputSelectComponent } from './form-builder/input-select/input-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegComponent,
    FormBuilderComponent,
    InputTextComponent,
    InputRadioComponent,
    InputSelectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
