import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-due-counter',
  templateUrl: './date-due-counter.component.html',
  styleUrls: ['./date-due-counter.component.scss'],
})
export class DateDueCounterComponent {
  @Input() dueDate!: Date;
  days = 163;
  hours = 15;
  min = 26;
  sec = 34;
}
