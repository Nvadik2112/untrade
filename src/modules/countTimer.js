const countTimer = (deadline) => {
  const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
  const zero = (time) => {
    let z = time;
    if (z > 0 && z < 10){
      z = ('0' + z);
    }
    if (z <= 0){
      z = "00";
    } 
    return z;
  };
  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow)/1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60),
          sec = zero(seconds),
          min = zero(minutes),
          hrs = zero(hours);
    return {timeRemaining, min, sec, hrs};
  };
             
  const updateClock = () => {
    const timer = getTimeRemaining();
    timerHours.textContent = timer.hrs;
    timerMinutes.textContent = timer.min;
    timerSeconds.textContent = timer.sec;
  };
  updateClock();
  if(getTimeRemaining().timeRemaining > 0) {
    setInterval(updateClock, 1000);
  }  
};
export default countTimer;
