window.onload = function() {
    // Set the duration of the timer in seconds (1 hour = 60 minutes * 60 seconds = 3600 seconds)
    var timerDuration = 3600;
    
    // Get the timer element from the HTML
    var timer = document.getElementById("timer");
    
    // Get the audio element for the sound effect
    var audio = new Audio('path/to/sound/file.mp3');
    
    // Update the timer every second
    var interval = setInterval(function() {
        // Calculate the remaining time
        var minutes = Math.floor(timerDuration / 60);
        var seconds = timerDuration % 60;
        
        // Display the remaining time on the timer element
        timer.innerHTML = "Time remaining: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        
        // Decrement the remaining time
        timerDuration--;
        
        // If the timer has reached zero, stop the countdown and play the sound effect
        if (timerDuration < 0) {
            clearInterval(interval);
            timer.innerHTML = "Time's up!";
            audio.play();
        }
    }, 1000);
};