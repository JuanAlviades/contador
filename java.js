const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const event = "May 19 2022 08:00:00";

function countTimer() {
    const newevent = new Date(event);
    const currentevent = new Date();

    const totalSeconds = (newevent - currentevent) / 1000;

    const daysCalc = ('0' + Math.floor(totalSeconds / 3600 / 24)).slice(-2);
    const hoursCalc = ('0' + Math.floor(totalSeconds / 3600) % 24).slice(-2);
    const minutesCalc = ('0' + Math.floor(totalSeconds / 60) % 60).slice(-2);
    const secCalc = ('0' + Math.floor(totalSeconds % 60)).slice(-2);

    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    minutes.innerHTML = minutesCalc;
    seconds.innerHTML = secCalc;

}
countTimer();

setInterval(countTimer, 1000);