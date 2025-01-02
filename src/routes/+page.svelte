<main class="mx-auto w-full md:w-4/5">
  <div id="mainDiv">
    <div class="space-y-4 text-center font-sans text-5xl text-sky-600">
      <h1>Reagan Bell Schedule</h1>
      <div id="clock"></div>
    </div>
    <div
      class="mb-2 mt-3 space-y-4 text-center font-sans text-3xl text-sky-600"
    >
      <div id="per"></div>
      <div id="min-left"></div>
      <div id="until-school"></div>
    </div>
    <div class="container-fluid">
      <ul class="nav nav-tabs" id="schedule">
        <div class="dropdown font-sans">
          <button
            id="dropdown"
            class="dropbtn bg-sky-600 p-3 text-lg text-white"
          >
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
      <table id="table" class="table text-center font-sans md:text-2xl">
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
      <footer class="font-sans">
        <p>
          <a
            class="text-sky-600 underline"
            href="https://github.com/renaissancedog/reagan-schedule"
            target="_blank">Star or fork</a
          >
          this repo.
        </p>
        <button id="backButton" class="toggle text-sky-600 underline">
          Back to homepage
        </button>
        <p class="mt-2">Made with ❤️ by William, 2024</p>
      </footer>
    </div>
  </div>
  <div id="breakDiv" class="hidden">
    <div class="m-2 space-y-4 text-center font-sans text-5xl text-sky-600">
      <h1>Why are you here? It's break! Have some fun!</h1>
      <div class="text-left text-xl">
        <ul class="list-disc">
          <li>
            Try
            <a class="underline" target="_blank" href="https://khanacademy.org"
              >learning something interesting!</a
            >
          </li>
          <li>
            Or
            <a class="underline" target="_blank" href="https://www.mysapl.org"
              >read a good book!</a
            >
          </li>
          <li>
            Maybe even
            <a
              class="text-sky-600 underline"
              href="https://github.com/renaissancedog/reagan-schedule"
              target="_blank"
            >
              contribute to this project!</a
            >
          </li>
          <li>
            If you're still bored, go outside, take a walk, and touch some
            grass!
          </li>
        </ul>
      </div>
      <footer class="text-left text-xl">
        <button class="toggle underline">See the schedule anyways</button>
        <p class="mt-8">Made with ❤️ by William, 2024</p>
      </footer>
    </div>
  </div>
</main>
