let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timeStarted = 0;

const timeElement = document.getElementById("time");
const startButton = document.getElementById("btn-start");
const stopButton = document.getElementById("btn-stop");
const resetButton = document.getElementById("btn-reset");

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

function updateTime() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    let formattedMinutes = pad(minutes, 2);
    let formattedSeconds = pad(seconds, 2);
    let formatedMilliseconds = pad(milliseconds, 2);

    let time = `${formattedMinutes}:${formattedSeconds}:${formatedMilliseconds}`;
    timeElement.textContent = time
}

function start() {
    updateTime();
    timeStarted = setInterval(updateTime, 10);
    startButton.removeEventListener("click", start);
}

function stop() {
    clearInterval(timeStarted);
    startButton.addEventListener("click", start);
}

function reset() {
    clearInterval(timeStarted);
    timeElement.textContent = "00:00:00"
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    startButton.addEventListener("click", start);
}

function pad(number, length) {
    let paddedNumber = String(number).padStart(length, '0');
    if (paddedNumber.length > length) {
        return paddedNumber.slice(0, length);
    } else {
        return paddedNumber;
    }
}
