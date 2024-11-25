//the code that makes this app work!
//it's pretty bad but if it works, it works
//have a great day!

const erDates = [
  [9, 11],
  [10, 4],
  [2, 7],
]; //24-25 school year, not including end of semester (they end at 1:20)
const sem1Dates = [[11, 17]]; //finals day 1
const sem2Dates = [[11, 18]]; //finals day 2
const sem3Dates = [[11, 19]]; //finals day 3
const sem4Dates = [[11, 20]]; //finals day 4
//Time and Date classes - not my code
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

Date.prototype.toString = function () {
  let hours = this.getHours();
  let minutes = this.getMinutes();
  let seconds = this.getSeconds();
  let ampm = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
};
//schedules
const regSchedule = [
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
const strikeSchedule = [
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
const erSchedule = [
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
const sem1Schedule = [
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
const sem2Schedule = [
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
const sem3Schedule = [
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
const sem4Schedule = [
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
function updateSchedule(schedule) {
  for (let item of schedule) {
    let str = item.start.toString() + ' - ' + item.end.toString();
    $('#' + item.id + '>.time').html(str);
  }
}

function updateTime() {
  let today = new Date();
  $('#clock').html(today.toString());
}

function updatePeriod(schedule) {
  let today = new Date();
  let dow = today.getDay(); // day of week
  let currTime = new Time(today.getHours(), today.getMinutes());

  if (
    !currTime.isIn(schedule[0].start, schedule[schedule.length - 1].end) ||
    dow === 6 ||
    dow === 0
  ) {
    // If not during school
    for (let item of schedule) {
      if ($('#' + item.id).hasClass('info')) {
        $('#' + item.id).removeClass('info');
      }
    }

    $('#per').html('');
    $('#min-left').html('');
    let minutes = schedule[0].start.subtract(currTime);
    let hours = Math.floor(minutes / 60);
    minutes %= 60;

    // add 24 or 48 hours if on the weekend
    hours +=
      (dow === 5 &&
        currTime.valueOf() > schedule[schedule.length - 1].end.valueOf()) ||
      (dow === 6 && currTime.valueOf() < schedule[0].start.valueOf())
        ? 24 * 2
        : (dow === 6 && currTime.valueOf() > schedule[0].start.valueOf()) ||
            (dow === 0 && currTime.valueOf() < schedule[0].start.valueOf())
          ? 24
          : 0;
    if (minutes == 1) {
      $('#until-school').html(
        `${hours} hours and ${minutes} minute until school`,
      );
    } else {
      $('#until-school').html(
        `${hours} hours and ${minutes} minutes until school`,
      );
    }
  } else {
    // Updates current period if during school
    if ($('#until-school').html() != '') $('#until-school').html('');
    let min, curr;
    for (let i = 0; i < schedule.length; i++) {
      curr = schedule[i];
      if (currTime.isIn(curr.start, curr.end)) {
        $('#per').html(curr.name);
        if (!$('#' + curr.id).hasClass('info'))
          $('#' + curr.id).addClass('info');
        min = curr.end - currTime;
        if (min == 1) {
          $('#min-left').html(min + ' minute left');
        } else {
          $('#min-left').html(min + ' minutes left');
        }
      } else {
        if ($('#' + curr.id).hasClass('info'))
          $('#' + curr.id).removeClass('info');
        if (i != 0) {
          if (currTime.isIn(schedule[i - 1].end, curr.start)) {
            $('#per').html('Before ' + curr.name);
            min = curr.start - currTime;
            if (min == 1) {
              $('#min-left').html(min + ' minute left');
            } else {
              $('#min-left').html(min + ' minutes left');
            }
          }
        }
      }
    }
  }
}

//bad code below! too lazy to find better way to do this
let schedule = regSchedule;
function showAllRows() {
  $('#strike').show();
  $('#p1').show();
  $('#p2').show();
  $('#p3').show();
  $('#p4').show();
  $('#p5').show();
  $('#p6').show();
  $('#p7').show();
  $('#p8').show();
}
$('#schedule a[href="#Regular"]').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  showAllRows();
  $('#strike').hide();
  updateSchedule(regSchedule);
  updatePeriod(regSchedule);
  schedule = regSchedule;
  document.getElementById('dropdown').innerText = 'Regular Schedule';
  $('.table').show();
});

$('#schedule a[href="#STRIKE"]').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  showAllRows();
  updateSchedule(strikeSchedule);
  updatePeriod(strikeSchedule);
  schedule = strikeSchedule;
  document.getElementById('dropdown').innerText = 'STRIKE Schedule';
  $('.table').show();
});

$('#schedule a[href="#erSchedule"]').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  showAllRows();
  $('#strike').hide();
  updateSchedule(erSchedule);
  updatePeriod(erSchedule);
  schedule = erSchedule;
  document.getElementById('dropdown').innerText = 'Early Release Schedule';
  $('.table').show();
});
$('#schedule a[href="#sem1Schedule"]').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  showAllRows();
  $('#strike').hide();
  updateSchedule(sem1Schedule);
  updatePeriod(sem1Schedule);
  schedule = sem1Schedule;
  document.getElementById('dropdown').innerText = 'Semester Exam Schedule';
  $('.table').show();
});
$('#schedule a[href="#sem2Schedule"]').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  showAllRows();
  $('#strike').hide();
  updateSchedule(sem2Schedule);
  updatePeriod(sem2Schedule);
  schedule = sem2Schedule;
  document.getElementById('dropdown').innerText = 'Semester Exam Schedule';
  $('.table').show();
});
$('#schedule a[href="#sem3Schedule"]').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  showAllRows();
  $('#strike').hide();
  $('#p2').hide();
  $('#p3').hide();
  $('#p8').hide();
  updateSchedule(sem3Schedule);
  updatePeriod(sem3Schedule);
  schedule = sem3Schedule;
  document.getElementById('dropdown').innerText =
    'Semester Early Release Schedule';
  $('.table').show();
});
$('#schedule a[href="#sem4Schedule"]').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  showAllRows();
  $('#strike').hide();
  $('#p1').hide();
  $('#p2').hide();
  $('#p7').hide();
  updateSchedule(sem4Schedule);
  updatePeriod(sem4Schedule);
  schedule = sem4Schedule;
  document.getElementById('dropdown').innerText =
    'Semester Early Release Schedule';
  $('.table').show();
});

$(function () {
  let today = new Date();
  let dow = today.getDay(); // day of week
  let month = today.getMonth();
  let date = today.getDate();
  let clicked = false;
  //bad code below! too lazy to find better way to do this
  for (let i = 0; i < erDates.length; i++) {
    if (erDates[i][0] == month && erDates[i][1] == date) {
      clicked = true;
      $('#schedule a[href="#erSchedule"]').click();
    }
  }
  for (let i = 0; i < sem1Dates.length; i++) {
    if (sem1Dates[i][0] == month && sem1Dates[i][1] == date) {
      clicked = true;
      $('#schedule a[href="#sem1Schedule"]').click();
    }
  }
  for (let i = 0; i < sem2Dates.length; i++) {
    if (sem2Dates[i][0] == month && sem2Dates[i][1] == date) {
      clicked = true;
      $('#schedule a[href="#sem2Schedule"]').click();
    }
  }
  for (let i = 0; i < sem3Dates.length; i++) {
    if (sem3Dates[i][0] == month && sem3Dates[i][1] == date) {
      clicked = true;
      $('#schedule a[href="#sem3Schedule"]').click();
    }
  }
  for (let i = 0; i < sem4Dates.length; i++) {
    if (sem4Dates[i][0] == month && sem4Dates[i][1] == date) {
      clicked = true;
      $('#schedule a[href="#sem4Schedule"]').click();
    }
  }
  if (!clicked) {
    if (dow == 4) {
      $('#schedule a[href="#STRIKE"]').click();
    } else {
      $('#schedule a[href="#Regular"]').click();
    }
  }
  updateTime();
  $('body').fadeIn(1500);
  setInterval(function () {
    updateTime();
    updatePeriod(schedule);
  }, 1000);
});
/* DROPDOWN STUFF */
function dropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
