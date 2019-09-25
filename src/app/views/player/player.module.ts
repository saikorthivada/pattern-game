import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { VerifyOTPModule } from '../../common/components/verify-otp/verify-otp.module';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    VerifyOTPModule
  ]
})
export class PlayerModule { }
