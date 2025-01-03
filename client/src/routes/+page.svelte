<script>
  import { onMount } from 'svelte';
  import {
    sem1Dates,
    sem1Schedule,
    sem2Dates,
    sem2Schedule,
    sem3Dates,
    sem3Schedule,
    sem4Dates,
    sem4Schedule,
    erDates,
    erSchedule,
    strikeSchedule,
    regSchedule,
    lopezSchedule,
    assemblyDates,
    assemblySchedule
  } from '../schedules.js';
  import jQuery from 'jquery';
  import Sidebar from '../lib/components/Sidebar.svelte';
  onMount(() => {
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
        return (
          this.valueOf() >= start.valueOf() && this.valueOf() < end.valueOf()
        );
      },
      subtract: function (t) {
        let x = this.valueOf(),
          y = t.valueOf();
        return x - y + (x > y ? 0 : 24 * 60);
      }
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

    function updateSchedule(schedule) {
      for (let item of schedule) {
        let str = item.start.toString() + ' - ' + item.end.toString();
        jQuery('#' + item.id + '>.time').html(str);
      }
    }

    function updateTime(schedule) {
      let today = new Date();
      jQuery('#clock').html(today.toString());
      updatePeriod(schedule);
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
          if (jQuery('#' + item.id).hasClass('info')) {
            jQuery('#' + item.id).removeClass('info');
          }
        }

        jQuery('#per').html('');
        jQuery('#min-left').html('');
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
        if (minutes == 1 && hours == 1) {
          jQuery('#until-school').html(`1 hour and 1 minute until school`);
        } else if (minutes == 1 && hours != 1) {
          jQuery('#until-school').html(
            `${hours} hours and 1 minute until school`
          );
        } else if (minutes != 1 && hours == 1) {
          jQuery('#until-school').html(
            `1 hour and ${minutes} minutes until school`
          );
        } else {
          jQuery('#until-school').html(
            `${hours} hours and ${minutes} minutes until school`
          );
        }
      } else {
        // Updates current period if during school
        if (jQuery('#until-school').html() != '')
          jQuery('#until-school').html('');
        let min, curr;
        for (let i = 0; i < schedule.length; i++) {
          curr = schedule[i];
          if (currTime.isIn(curr.start, curr.end)) {
            jQuery('#per').html(curr.name);
            if (!jQuery('#' + curr.id).hasClass('info'))
              jQuery('#' + curr.id).addClass('info');
            min = curr.end - currTime;
            if (min == 1) {
              jQuery('#min-left').html(min + ' minute left');
            } else {
              jQuery('#min-left').html(min + ' minutes left');
            }
          } else {
            if (jQuery('#' + curr.id).hasClass('info'))
              jQuery('#' + curr.id).removeClass('info');
            if (i != 0) {
              if (currTime.isIn(schedule[i - 1].end, curr.start)) {
                jQuery('#per').html('Before ' + curr.name);
                min = curr.start - currTime;
                if (min == 1) {
                  jQuery('#min-left').html(min + ' minute left');
                } else {
                  jQuery('#min-left').html(min + ' minutes left');
                }
              }
            }
          }
        }
      }
    }

    let schedule = regSchedule;
    function defaultDrop() {
      jQuery('#regular').show();
      jQuery('#strike').show();
      jQuery('#er').show();
      jQuery('#lopez').show();
      jQuery('#assembly').hide();
      jQuery('#sem1').hide();
      jQuery('#sem2').hide();
      jQuery('#sem3').hide();
      jQuery('#sem4').hide();
    }
    function defaultRows() {
      jQuery('#lunch').hide();
      jQuery('#STRIKE').hide();
      jQuery('#p1').show();
      jQuery('#p2').show();
      jQuery('#p3').show();
      jQuery('#p4').show();
      jQuery('#p5').show();
      jQuery('#p6').show();
      jQuery('#p7').show();
      jQuery('#p8').show();
    }
    function update(sched) {
      updateSchedule(sched);
      updatePeriod(sched);
      schedule = sched;
    }
    jQuery('#regular').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      update(regSchedule);
      document.getElementById('dropdown').innerText = 'Regular Schedule';
    });

    jQuery('#strike').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      jQuery('#STRIKE').show();
      update(strikeSchedule);
      document.getElementById('dropdown').innerText = 'STRIKE Schedule';
    });

    jQuery('#er').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      update(erSchedule);
      document.getElementById('dropdown').innerText = 'Early Release Schedule';
    });
    jQuery('#sem1').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      update(sem1Schedule);
      document.getElementById('dropdown').innerText = 'Semester Exam Schedule';
    });
    jQuery('#sem2').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      update(sem2Schedule);
      document.getElementById('dropdown').innerText = 'Semester Exam Schedule';
    });
    jQuery('#sem3').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      update(sem3Schedule);
      document.getElementById('dropdown').innerText = 'Semester Exam Schedule';
      jQuery('#p2').hide();
      jQuery('#p3').hide();
      jQuery('#p8').hide();
    });
    jQuery('#sem4').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      update(sem4Schedule);
      document.getElementById('dropdown').innerText = 'Semester Exam Schedule';
      jQuery('#p1').hide();
      jQuery('#p2').hide();
      jQuery('#p7').hide();
    });
    jQuery('#assembly').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      update(assemblySchedule);
      document.getElementById('dropdown').innerText = 'Assembly Schedule';
    });
    jQuery('#lopez').click(function (e) {
      e.preventDefault();
      jQuery(this).show();
      defaultRows();
      jQuery('#lunch').show();
      update(lopezSchedule);
      document.getElementById('dropdown').innerText =
        'Lopez 8th Grade Schedule';
    });
    function populate() {
      let today = new Date();
      let dow = today.getDay(); // day of week
      let month = today.getMonth();
      let date = today.getDate();
      let clicked = false;
      defaultDrop();
      //bad code below! too lazy to find better way to do this
      for (let i = 0; i < erDates.length; i++) {
        if (erDates[i][0] == month && erDates[i][1] == date) {
          clicked = true;
          jQuery('#er').click();
        }
      }
      for (let i = 0; i < sem1Dates.length; i++) {
        if (sem1Dates[i][0] == month && sem1Dates[i][1] == date) {
          clicked = true;
          jQuery('#sem1').show();
          jQuery('#sem1').click();
        }
      }
      for (let i = 0; i < sem2Dates.length; i++) {
        if (sem2Dates[i][0] == month && sem2Dates[i][1] == date) {
          clicked = true;
          jQuery('#sem2').show();
          jQuery('#sem2').click();
        }
      }
      for (let i = 0; i < sem3Dates.length; i++) {
        if (sem3Dates[i][0] == month && sem3Dates[i][1] == date) {
          clicked = true;
          jQuery('#sem3').show();
          jQuery('#sem3').click();
        }
      }
      for (let i = 0; i < sem4Dates.length; i++) {
        if (sem4Dates[i][0] == month && sem4Dates[i][1] == date) {
          clicked = true;
          jQuery('#sem4').show();
          jQuery('#sem4').click();
        }
      }
      for (let i = 0; i < assemblyDates.length; i++) {
        if (assemblyDates[i][0] == month && assemblyDates[i][1] == date) {
          clicked = true;
          jQuery('#assembly').show();
          jQuery('#assembly').click();
        }
      }
      if (!clicked) {
        if (dow == 4) {
          jQuery('#strike').click();
        } else {
          jQuery('#regular').click();
        }
      }
    }
    /* DROPDOWN STUFF */
    jQuery('#dropdown').click(function (e) {
      e.preventDefault();
      document.getElementById('myDropdown').classList.toggle('show');
    });
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
    updateTime(schedule);
    setInterval(function () {
      updateTime(schedule);
    }, 1000);
    populate();
  });
  //Time and Date classes - not my code
</script>
<div class="flex flex-row items-center justify-center">
<Sidebar />
<main class="px-2 font-sans w-1/2">
  <div class="space-y-4 text-center text-5xl text-sky-600">
    <h1>Reagan Bell Schedule</h1>
    <div id="clock"></div>
  </div>
  <div class="mb-2 mt-3 space-y-4 text-center text-3xl text-sky-600">
    <div id="per"></div>
    <div id="min-left"></div>
    <div id="until-school"></div>
  </div>
  <div class="container-fluid">
    <ul class="nav nav-tabs" id="schedule">
      <div class="dropdown">
        <button id="dropdown" class="dropbtn bg-sky-600 p-3 text-lg text-white">
          Dropdown
        </button>
        <div
          id="myDropdown"
          class="dropdown-content absolute hidden min-w-40 bg-gray-100 text-black"
        >
          <a id="regular">Regular Schedule</a>
          <a id="strike">STRIKE Schedule</a>
          <a id="er">Early Release Schedule</a>
          <a id="lopez">Lopez 8th Grade Schedule</a>
          <a id="sem1">Semester Exam Schedule</a>
          <a id="sem2">Semester Exam Schedule</a>
          <a id="sem3">Semester Exam Schedule</a>
          <a id="sem4">Semester Exam Schedule</a>
          <a id="assembly">Assembly Schedule</a>
        </div>
      </div>
    </ul>
    <table id="table" class="table w-full bg-white text-center md:text-2xl">
      <tbody>
        <tr id="p1">
          <td>Period 1</td>
          <td class="time"></td>
        </tr>
        <tr id="p2">
          <td>Period 2</td>
          <td class="time"></td>
        </tr>
        <tr id="STRIKE">
          <td>STRIKE Time</td>
          <td class="time"></td>
        </tr>
        <tr id="p3">
          <td>Period 3</td>
          <td class="time"></td>
        </tr>
        <tr id="p4">
          <td>Period 4</td>
          <td class="time"></td>
        </tr>
        <tr id="p5">
          <td>Period 5</td>
          <td class="time"></td>
        </tr>
        <tr id="lunch">
          <td>8th Grade Lunch</td>
          <td class="time"></td>
        </tr>
        <tr id="p6">
          <td>Period 6</td>
          <td class="time"></td>
        </tr>
        <tr id="p7">
          <td>Period 7</td>
          <td class="time"></td>
        </tr>
        <tr id="p8">
          <td>Period 8</td>
          <td class="time"></td>
        </tr>
      </tbody>
    </table>
    <footer class="mt-4">
      <p>
        <a
          class="text-sky-600 underline"
          href="https://github.com/renaissancedog/reagan-schedule"
          target="_blank">Star or fork</a
        >
        this repo.
      </p>
      <p class="mb-4 mt-4">Made with ❤️ by William, 2024</p>
    </footer>
  </div>
</main>
</div>