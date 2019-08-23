import { NgModule, NO_ERRORS_SCHEMA ,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables/observables.component';
import { OperatorsComponent } from './operators/operators.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [ObservablesComponent, OperatorsComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class RxjsModule { }
