function Time(h, m) {
  this.hours = typeof h === 'number' && h >= 0 && h <= 23 ? h : 0;
  this.minutes = typeof m === 'number' && m >= 0 && m <= 59 ? m : 0;
}

Time.prototype = {
  valueOf: function () {
    return this.hours * 60 + this.minutes;
  },
  toString: function () {
    let hours = this.hours === 0 ? 12 : this.hours % 12 || 12;
    let minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    let ampm = this.hours < 12 ? 'AM' : 'PM';
    return `${hours}:${minutes} ${ampm}`;
  },
  isIn: function (start, end) {
    return this.valueOf() >= start.valueOf() && this.valueOf() < end.valueOf();
  },
  subtract: function (t) {
    let x = this.valueOf(),
      y = t.valueOf();
    return x - y + (x > y ? 0 : 24 * 60);
  },
};
export const holidayDates = [
  //spring break, summer break, fall break, winter break
  //format: 1st day of holiday, last day of holiday
  //note that no schooldays are included in the range
  [
    [11, 21],
    [0, 5],
  ],
  [
    [2, 8],
    [2, 16],
  ],
  [
    [4, 23],
    [7, 10],
  ],
];
export const erDates = [
  [9, 11],
  [10, 4],
  [2, 7],
]; //24-25 school year, not including end of semester (they end at 1:20)
export const sem1Dates = [[11, 17]]; //finals day 1
export const sem2Dates = [[11, 18]]; //finals day 2
export const sem3Dates = [[11, 19]]; //finals day 3
export const sem4Dates = [[11, 20]]; //finals day 4
export const assemblyDates = [[0, 7]];
export const regSchedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 50), end: new Time(9, 45) },
  { name: 'Period 2', id: 'p2', start: new Time(9, 50), end: new Time(10, 45) },
  {
    name: 'Period 3',
    id: 'p3',
    start: new Time(10, 50),
    end: new Time(11, 40),
  },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(11, 45),
    end: new Time(12, 35),
  },
  {
    name: 'Period 5',
    id: 'p5',
    start: new Time(12, 40),
    end: new Time(13, 30),
  },
  {
    name: 'Period 6',
    id: 'p6',
    start: new Time(13, 35),
    end: new Time(14, 25),
  },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(14, 30),
    end: new Time(15, 20),
  },
  {
    name: 'Period 8',
    id: 'p8',
    start: new Time(15, 25),
    end: new Time(16, 15),
  },
];
export const strikeSchedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 50), end: new Time(9, 40) },
  { name: 'Period 2', id: 'p2', start: new Time(9, 45), end: new Time(10, 30) },
  {
    name: 'STRIKE',
    id: 'strike',
    start: new Time(10, 35),
    end: new Time(11, 15),
  },
  { name: 'Period 3', id: 'p3', start: new Time(11, 20), end: new Time(12, 5) },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(12, 10),
    end: new Time(12, 55),
  },
  { name: 'Period 5', id: 'p5', start: new Time(13, 0), end: new Time(13, 45) },
  {
    name: 'Period 6',
    id: 'p6',
    start: new Time(13, 50),
    end: new Time(14, 35),
  },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(14, 40),
    end: new Time(15, 25),
  },
  {
    name: 'Period 8',
    id: 'p8',
    start: new Time(15, 30),
    end: new Time(16, 15),
  },
];
export const erSchedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 50), end: new Time(9, 26) },
  { name: 'Period 2', id: 'p2', start: new Time(9, 30), end: new Time(10, 6) },
  {
    name: 'Period 3',
    id: 'p3',
    start: new Time(10, 10),
    end: new Time(10, 45),
  },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(10, 49),
    end: new Time(11, 24),
  },
  { name: 'Period 5', id: 'p5', start: new Time(11, 28), end: new Time(12, 3) },
  { name: 'Period 6', id: 'p6', start: new Time(12, 7), end: new Time(12, 42) },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(12, 46),
    end: new Time(13, 21),
  },
  { name: 'Period 8', id: 'p8', start: new Time(13, 25), end: new Time(14, 0) },
];
export const sem1Schedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 50), end: new Time(9, 35) },
  { name: 'Period 2', id: 'p2', start: new Time(9, 40), end: new Time(10, 25) },
  {
    name: 'Period 3',
    id: 'p3',
    start: new Time(10, 30),
    end: new Time(11, 15),
  },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(11, 20),
    end: new Time(12, 30),
  },
  {
    name: 'Period 5',
    id: 'p5',
    start: new Time(12, 35),
    end: new Time(13, 20),
  },
  {
    name: 'Period 6',
    id: 'p6',
    start: new Time(13, 25),
    end: new Time(14, 35),
  },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(14, 40),
    end: new Time(15, 25),
  },
  {
    name: 'Period 8',
    id: 'p8',
    start: new Time(15, 30),
    end: new Time(16, 15),
  },
];
export const sem2Schedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 50), end: new Time(9, 35) },
  { name: 'Period 2', id: 'p2', start: new Time(9, 40), end: new Time(10, 50) },
  {
    name: 'Period 3',
    id: 'p3',
    start: new Time(10, 55),
    end: new Time(11, 40),
  },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(11, 45),
    end: new Time(12, 30),
  },
  {
    name: 'Period 5',
    id: 'p5',
    start: new Time(12, 35),
    end: new Time(13, 45),
  },
  {
    name: 'Period 6',
    id: 'p6',
    start: new Time(13, 50),
    end: new Time(14, 35),
  },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(14, 40),
    end: new Time(15, 25),
  },
  {
    name: 'Period 8',
    id: 'p8',
    start: new Time(15, 30),
    end: new Time(16, 15),
  },
];
export const sem3Schedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 50), end: new Time(10, 5) },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(10, 10),
    end: new Time(10, 45),
  },
  {
    name: 'Period 5',
    id: 'p5',
    start: new Time(10, 50),
    end: new Time(11, 25),
  },
  { name: 'Period 6', id: 'p6', start: new Time(11, 30), end: new Time(12, 5) },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(12, 10),
    end: new Time(13, 20),
  },
];
export const sem4Schedule = [
  { name: 'Period 3', id: 'p3', start: new Time(8, 50), end: new Time(10, 5) },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(10, 10),
    end: new Time(10, 45),
  },
  {
    name: 'Period 5',
    id: 'p5',
    start: new Time(10, 50),
    end: new Time(11, 25),
  },
  { name: 'Period 6', id: 'p6', start: new Time(11, 30), end: new Time(12, 5) },
  {
    name: 'Period 8',
    id: 'p8',
    start: new Time(12, 10),
    end: new Time(13, 20),
  },
];
export const assemblySchedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 50), end: new Time(9, 55) },
  { name: 'Period 2', id: 'p2', start: new Time(10, 0), end: new Time(11, 0) },
  {
    name: 'Period 3',
    id: 'p3',
    start: new Time(11, 5),
    end: new Time(12, 5),
  },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(12, 10),
    end: new Time(12, 50),
  },
  {
    name: 'Period 5',
    id: 'p5',
    start: new Time(12, 55),
    end: new Time(13, 35),
  },
  {
    name: 'Period 6',
    id: 'p6',
    start: new Time(13, 40),
    end: new Time(14, 20),
  },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(14, 25),
    end: new Time(15, 25),
  },
  {
    name: 'Period 8',
    id: 'p8',
    start: new Time(15, 30),
    end: new Time(16, 15),
  },
];
export const lopezSchedule = [
  { name: 'Period 1', id: 'p1', start: new Time(8, 25), end: new Time(9, 12) },
  { name: 'Period 2', id: 'p2', start: new Time(9, 16), end: new Time(10, 3) },
  {
    name: 'Period 3',
    id: 'p3',
    start: new Time(10, 7),
    end: new Time(10, 55),
  },
  {
    name: 'Period 4',
    id: 'p4',
    start: new Time(10, 59),
    end: new Time(11, 45),
  },
  {
    name: 'Period 5',
    id: 'p5',
    start: new Time(11, 49),
    end: new Time(12, 35),
  },
  {
    name: '8th Grade Lunch',
    id: 'lunch',
    start: new Time(12, 39),
    end: new Time(13, 9),
  },
  {
    name: 'Period 6',
    id: 'p6',
    start: new Time(13, 13),
    end: new Time(14, 0),
  },
  {
    name: 'Period 7',
    id: 'p7',
    start: new Time(14, 4),
    end: new Time(14, 50),
  },
  {
    name: 'Period 8',
    id: 'p8',
    start: new Time(14, 54),
    end: new Time(15, 40),
  },
];
