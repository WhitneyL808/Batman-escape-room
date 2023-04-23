/*const countdown = (duration) => {
    let timer = duration;
    const interval = setInterval(() => {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      console.log(`${minutes}:${seconds}`);
      if (--timer < 0) {
        clearInterval(interval);
        console.log("Time's up!");
      }
    }, 1000);
  };
  
  countdown(60 * 60); // Start a countdown timer for 60 minutes*/

  // Set the end time to one hour from now
var endTime = new Date().getTime() + 60 * 60 * 1000;

// Update the countdown every second
var timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current time
  var currentTime = new Date().getTime();

  // Calculate the remaining time
  var remainingTime = endTime - currentTime;

  // If the timer has expired, stop the countdown and display "0:00"
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").innerHTML = "0:00";
    return;
  }

  // Calculate the minutes and seconds remaining
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Add a leading zero to the seconds if necessary
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Update the countdown display
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
}