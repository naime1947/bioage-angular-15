import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-due-counter',
  templateUrl: './date-due-counter.component.html',
  styleUrls: ['./date-due-counter.component.scss'],
})
export class DateDueCounterComponent implements OnInit, OnDestroy {
  @Input() dueDate: Date | undefined;
  @Input() seconds!: number;

  days = '00';
  hours = '00';
  min = '00';
  sec = '00';

  intervalId: any;

  constructor() {}

  ngOnInit(): void {
    if (this.dueDate) {
      const secondsInTheFuture = this.dueDate?.getTime() / 1000;
      const secondsNow = new Date().getTime() / 1000;
      this.seconds = Math.round(secondsInTheFuture - secondsNow);

      if(this.seconds > 0){
        this.intervalId = setInterval(() => {
          this.calculateDueDate();
        }, 1000);
      }
    }
  }

  private calculateDueDate() {
    let days = Math.floor(this.seconds / 24 / 60 / 60);
    let hoursLeft = Math.floor(this.seconds - days * 86400);
    let hours = Math.floor(hoursLeft / 3600);
    let minutesLeft = Math.floor(hoursLeft - hours * 3600);
    let minutes = Math.floor(minutesLeft / 60);
    let remainingSeconds = this.seconds % 60;

    if (this.seconds == 0) {
      clearInterval(this.intervalId);
    } else {
      this.seconds--;
    }

    this.days = days.toString();
    this.hours = hours.toString();
    this.min = minutes.toString();
    this.sec = remainingSeconds.toString();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
