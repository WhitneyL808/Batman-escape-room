const countdown = (duration) => {
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
  
  countdown(60 * 60); // Start a countdown timer for 60 minutes