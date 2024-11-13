import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  tasks = [
    { day: 'Today', tasks: ['Task 1', 'Task 2', 'Task 3'] },
    { day: 'Monday', tasks: ['Task 1', 'Task 2', 'Task 3'] },
    { day: 'Tuesday', tasks: ['Task 1', 'Task 2'] },
    { day: 'Wednesday', tasks: ['Task 1', 'Task 2'] },
    { day: 'Thursday', tasks: ['Task 1'] },
    { day: 'Friday', tasks: ['Task 1', 'Task 2'] },
    { day: 'Saturday', tasks: ['Task 1'] }
  ];
}
