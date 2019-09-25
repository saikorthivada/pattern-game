import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyOTPComponent } from './verify-otp.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: VerifyOTPComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyOTPRoutingModule { }
