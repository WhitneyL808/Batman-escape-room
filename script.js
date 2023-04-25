var countdown = 3600; // the initial time in seconds

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
  countdown -= 300; // subtract 5 minutes from the countdown
  updateTimer();
}

function subtract15() {
  countdown -= 900; // subtract 15 minutes from the countdown
  updateTimer();
}

// update the timer every second
setInterval(function () {
  if (countdown > 0) {
    countdown--;
    updateTimer();
  }
}, 1000);
