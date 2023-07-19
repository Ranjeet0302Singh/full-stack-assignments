window.onload = () => {
  function digitalClock() {
    const date = new Date();
    console.log(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("todaysDate").innerHTML=date
    document.getElementById("hoursTime").innerHTML=hours
    document.getElementById("minutesTime").innerHTML=minutes
    document.getElementById("secondsTime").innerHTML=seconds
    setInterval(digitalClock,1000)
  }
  digitalClock();
};
