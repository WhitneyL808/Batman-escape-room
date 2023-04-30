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
function subtract7() {
  if (countdown <= 420) {
    countdown = 1; // set the countdown to zero
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  } else {
    countdown -= 420; // subtract 5 minutes from the countdown
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  }
}

function subtract15() {
  if (countdown <= 900) {
    countdown = 1; // set the countdown to zero
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  } else {
    countdown -= 900; // subtract 5 minutes from the countdown
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  }
}

function checkSolution() {
  var userInput = document.getElementById("user-input").value.toLowerCase();
  var names = ["gains", "ed gains", "edward gains"];
  var messages = ["Nice try, Batman!", "You're the world's greatest detective? Really?", "So close! Try Again!", "Have I bested the Dark Knight? Try Harder!", "You really thought that was me? You're not even close!", "I guess your small brain can't handle this one!"];
  var randomIndex = Math.floor(Math.random() * messages.length);
  var randomMessage = messages[randomIndex];
  if (names.includes(userInput)) {
    window.location.href = "end.html"; // redirect the user to end page
  } else {
    alert(randomMessage);
    subtract15();
  }
}

function checkClue() {
  var userInput = document.getElementById("user-input").value;
  if (userInput === "1") {
    window.location.href = "clue1.html"; // redirect the user to clue1 page
  } else if (userInput === "2") {
    window.location.href = "clue2.html"; // redirect the user to clue2 page
  } else if (userInput === "3") {
    window.location.href = "clue3.html"; // redirect the user to clue3 page
  } else if (userInput === "4") {
    window.location.href = "clue4.html"; // redirect the user to clue4 page
  } else if (userInput === "5") {
    window.location.href = "clue5.html"; // redirect the user to clue5 page
  } else if (userInput === "6") {
    window.location.href = "clue6.html"; // redirect the user to clue6 page
  } else if (userInput === "7") {
    window.location.href = "clue7.html"; // redirect the user to clue7 page
  } else {
    alert("I'm not sure where you got that number, Batman!");
  }
}

function disableButton(buttonNum) {
  var button = document.getElementById("button" + buttonNum);
  button.disabled = true;
  localStorage.setItem("button" + buttonNum + "Disabled", JSON.stringify(true));

  var link = document.getElementById("link" + buttonNum);
  var text = link.textContent;
  var paragraph = document.createElement("p");
  paragraph.textContent = text;
  link.parentNode.replaceChild(paragraph, link);
}

window.onload = function() {
  for (var i = 1; i <= 3; i++) {
    var button = document.getElementById("button" + i);
    var buttonDisabled = JSON.parse(localStorage.getItem("button" + i + "Disabled"));
    if (buttonDisabled === true) {
      button.disabled = true;

      var link = document.getElementById("link" + i);
      var text = link.textContent;
      var paragraph = document.createElement("p");
      paragraph.textContent = text;
      link.parentNode.replaceChild(paragraph, link);
    }
  }
}

// check if the countdown value is valid, and reset it if not
if (isNaN(countdown) || countdown < 0) {
  countdown = initialCountdown;
  localStorage.setItem("countdown", countdown);
}

// update the timer every second
var intervalId = setInterval(function () {
  if (countdown > 0) {
    countdown--;
    updateTimer();
    localStorage.setItem("countdown", countdown); // store the remaining time in localStorage
  } else {
    clearInterval(intervalId); // stop the timer
    localStorage.removeItem("countdown"); // remove the countdown value from localStorage
    localStorage.removeItem("button" + 1 + "Disabled")
    localStorage.removeItem("button" + 2 + "Disabled")
    localStorage.removeItem("button" + 3 + "Disabled")
    window.location.href = "failed.html"; // redirect the user to another page
  }
}, 1000);