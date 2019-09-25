import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../common/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  currentValue = 0;
  arr = [];
  level = 0;
  isGameStarted = true;
  isTryAgain = false;
  interval: any;
  constructor(private storage: StorageService, private router: Router) {
    if (this.storage.getLocalStorageItem('level')) {
      this.level = parseInt(this.storage.getLocalStorageItem('level'), 10);
    } else {
      this.level = 0;
      this.storage.setLocalStorageItem('level', this.level.toString());
    }
    for (let i = 1 ; i <= this.level + 4; i++) {
      this.arr.push(i);
    }
  }

  gameStarted(type) {
    if (type === 'play') {
      this.isTryAgain = true;
      this.isGameStarted = false;
    }
    if (type === 'try') {
      this.isTryAgain = true;
    }
    this.arr = this.shuffle(this.arr);
    this.currentValue = this.arr[0];
    this.interval = setInterval(() => {
      const index = this.arr.indexOf(this.currentValue);
      if (index !== -1) {
        if (index === this.arr.length - 1) {
          this.currentValue = this.arr[0];
        } else {
          this.currentValue = this.arr[index + 1];
        }
      }
    }, (1000 - (this.level * 100)));
  }

  tryAgain(ev) {
    this.currentValue = 0;
    clearInterval(this.interval);
    this.gameStarted(ev);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  patternSubmit(ev) {
    if (this.level > 10) {
      alert('You have finished your game');
      this.level = 0;
      this.storage.setLocalStorageItem('level', this.level);
      this.router.navigate(['status', 1]);
      return;
    }
    if (ev.toString() === this.arr.join('')) {
      alert('Level ' + this.level + ' completed successfully');
      this.arr.push(this.arr.length + 1);
      this.level = this.level + 1;
    } else {
      this.router.navigate(['status', 2]);
      this.level = 0;
    }
    this.isTryAgain = false;
    this.isGameStarted = true;
    this.currentValue = 0;
    this.storage.setLocalStorageItem('level', this.level);
    clearInterval(this.interval);
  }

}
