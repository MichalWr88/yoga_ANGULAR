import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {
  setHours,
  setMinutes,
  getMonth,
  startOfMonth,
  startOfWeek,
  startOfDay,
  endOfMonth,
  endOfWeek,
  endOfDay
} from 'date-fns';
// import * as RRule from 'rrule';
import { RRule, RRuleSet } from 'rrule';

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
  recurringEvents = [
    {
      title: 'Recurs on the 5th of each month',
      color: {
        primary: '#D89AFE',
        secondary: '#D89AFE'
      },
      rrule: {
        freq: RRule.MONTHLY,
        bymonthday: 5
      }
    },
    {
      title: 'Recurs yearly on the 10th of the current month',
      color: {
        primary: '#D89AFE',
        secondary: '#D89AFE'
      },
      rrule: {
        freq: RRule.YEARLY,
        bymonth: getMonth(new Date()) + 1,
        bymonthday: 10
      }
    },
    {
      title: 'Recurs weekly on mondays',
      color: {
        primary: '#D89AFE',
        secondary: '#D89AFE'
      },
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO]
      }
    }
  ];
  events: CalendarEvent[] = [
    {
      title: 'Beginners',
      start: setHours(setMinutes(new Date(), 0), 8),
      end: setHours(setMinutes(new Date(), 0), 9),
      color: {
        primary: '#D89AFE',
        secondary: '#D89AFE'
      }
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
