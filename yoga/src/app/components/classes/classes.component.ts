import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  viewDate: Date = new Date();
  colors: {
    begginers: {
      primary: '#D89AFE';
      secondary: '#D89AFE';
    };
    intermediate: {
      primary: '#D89AFE';
      secondary: '#D89AFE';
    };
    advance: {
      primary: '#D89AFE';
      secondary: '#D89AFE';
    };
  };
  view = 'week';
  events: CalendarEvent[] = [
    {
      title: 'Beginners',
      start: setHours(setMinutes(new Date(), 0), 3),
      color: this.colors.advance
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      color: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      }
    }
  ];
  constructor() {}

  ngOnInit() {}
}
