import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  constructor() {}
  ngOnInit() {
    setInterval(()=>{
      let currentTime = new Date();
      this.seconds = currentTime.getSeconds();
      this.minutes = currentTime.getMinutes();
      this.hours = currentTime.getHours();
    },1000)
  }

  getSecondStyle() {
    return 'rotate('+(this.seconds* 6)+'deg)';
  }
  getMinStyle() {
    return 'rotate('+(this.minutes* 6)+'deg)';
  }
  getHourStyle() {
    return 'rotate('+(this.hours* 6)+'deg)';
  }
}
