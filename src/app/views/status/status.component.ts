import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  isSuccess = false;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(res => {
      if (res['params'].id === '1') {
        this.isSuccess = true;
      }
      if (res['params'].id === '2') {
        this.isSuccess = false;
      }
    });
  }

  ngOnInit() {
  }

}
