import { Component, EventEmitter, Input, OnChanges, SimpleChange, SimpleChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-svsudo-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOTPComponent implements OnChanges {

  @Input()
  title = '';
  @Input()
  subTitle = '';
  @Input()
  buttonLabel = '';
  @Input()
  digitsOfOTP: number;
  @Output()
  OTPSubmit: EventEmitter<any> = new EventEmitter();
  OTPFieldArray = [];
  OTPForm: FormGroup;
  constructor(private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    this.OTPForm = this._formBuilder.group({
      OTPFields: this._formBuilder.array([this.OTPGroup()])
    });
    if (typeof this.digitsOfOTP === 'string') {
      this.digitsOfOTP = parseInt(this.digitsOfOTP, 10);
    }
    if (this.digitsOfOTP !== undefined && this.digitsOfOTP > 0) {
      for (let i = 0 ; i < this.digitsOfOTP - 1 ; i++) {
        this.addOTPcontrol();
      }
    }
  }

  addOTPcontrol() {
    (<FormArray>this.OTPForm.get('OTPFields')).push(this.OTPGroup());
  }
  OTPGroup(): FormGroup {
    return this._formBuilder.group({
      OTPNumber: ['', Validators.compose([Validators.required])]
    });
  }

  OTPSubmited() {
    let str = '';
    for (let i = 0 ; i < this.OTPForm.get('OTPFields').value.length; i++) {
      str = str + this.OTPForm.get('OTPFields').value[i]['OTPNumber'];
    }
    this.OTPSubmit.emit(parseInt(str, 10));
  }
}
