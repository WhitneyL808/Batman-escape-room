var initialCountdown = 3600; // the initial time in seconds
var countdown = parseInt(localStorage.getItem("countdown")) || initialCountdown; // get the remaining time from localStorage or use the initial timevar countdown = 3600; // the initial time in seconds

function updateTimer() {
  var minutes = Math.floor(countdown / 60);
  var seconds = countdown % 60;
  document.getElementById("timer").innerHTML =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
}

//Clue Time Subtraction
function subtract5() {
  if (countdown <= 300) {
    countdown = 0; // set the countdown to zero
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  } else {
    countdown -= 300; // subtract 5 minutes from the countdown
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  }
}

function subtract15() {
  if (countdown <= 900) {
    countdown = 0; // set the countdown to zero
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  } else {
    countdown -= 900; // subtract 5 minutes from the countdown
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  }
}

// check if the countdown value is valid, and reset it if not
if (isNaN(countdown) || countdown < 0) {
  countdown = initialCountdown;
  localStorage.setItem("countdown", countdown);
}

// update the timer every second
var intervalId = setInterval(function() {
  if (countdown > 0) {
    countdown--;
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  } else {
    clearInterval(intervalId); // stop the timer
    localStorage.removeItem("countdown"); // remove the countdown value from localStorage
    window.location.href = "failed.html"; // redirect the user to another page
  }
}, 1000);