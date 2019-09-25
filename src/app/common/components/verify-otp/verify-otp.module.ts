import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyOTPRoutingModule } from './verify-otp-routing.module';
import { VerifyOTPComponent } from './verify-otp.component';
import { MoveNextByMaxLengthDirective } from './move-next-by-max-length.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerifyOTPComponent, MoveNextByMaxLengthDirective
  ],
  imports: [
    CommonModule,
    VerifyOTPRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    VerifyOTPComponent
  ]
})
export class VerifyOTPModule { }
