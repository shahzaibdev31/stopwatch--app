// Get Button Ids
const start = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const lap = document.querySelector('.laps-list');
const lapBtn = document.querySelector('#lap');

// Get Time Display
const hours = document.querySelector('.hours');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const miliSec = document.querySelector('.milliseconds');

// Declare Variable For Time Watch Functions
let interval = null;
let h = 0, m = 0, s = 0, ms = 0;

// ------------- Start Button Funcctionality -------------------- //

// Start Watch-Timer
start.addEventListener('click', () => {
    // Enable Stop Button
    stopBtn.disabled = false;
    start.disabled = true;
    lapBtn.disabled = false;
    reset.disabled = false;

    // Call Timer Function
    startTimer();
})


// ---> Timer Function
function startTimer() {
    // Use setInterval()
    interval = setInterval(() => {
        // Increment miliSeconds
        ms++;

        // Update All Other Variables 
        if (ms == 100) {
            ms = 0;
            // Seconds Incremented
            s++;
        } else if (s == 60) {
            s = 0;
            // Minutes Updated
            m++;
        } else if (m == 60) {
            m = 0;
            // Hours Updated
            h++;
        }

        // Display Time Fuction Call
        displayTime(h.toString(), m.toString(), s.toString(), ms.toString());

    }, 10);
}

// Display Time
function displayTime(h, m, s, ms) {
    hours.textContent = h < 10 ? '0' + h : h;
    min.textContent = m < 10 ? '0' + m : m;
    sec.textContent = s < 10 ? '0' + s : s;
    miliSec.textContent = ms < 10 ? '0' + ms : ms;
}

// ------------- Stop Button Funcctionality -------------------- //

// Stop Watch Timer
stopBtn.addEventListener('click', () => {
    // Disable Stop Button
    stopBtn.disabled = true;
    start.disabled = false;
    lapBtn.disabled = true;

    // Stop Timer Function
    clearInterval(interval);

    // Call getTimeLap Function
    getLapTime();
})

// ------------- Reset Button Funcctionality -------------------- //

// Reset the Timer
reset.addEventListener('click', () => {
    // Set All Time Variables to Zero
    h = 0;
    m = 0;
    s = 0;
    ms = 0;

    // Reset Lap Time List
    lap.innerHTML = '';

    // Display Change to Default Zero
    hours.textContent = min.textContent = sec.textContent = miliSec.textContent = '00';

    // Disable Stop Button
    stopBtn.disabled = true;
    start.disabled = false;
    lapBtn.disabled = true;
    reset.disabled = true;

    // Stop Timer if Running
    clearInterval(interval);
})

// ------------- Lap Button Funcctionality -------------------- //

// Add Listener for Lap Button
lapBtn.addEventListener('click', () => {
    // Get LapTime Function Calling
    getLapTime();
})

function getLapTime() {
    const listItem = document.createElement('li');
    const msSpan = document.createElement('span');

    // Styling For Miliseconds
    msSpan.textContent = miliSec.textContent;
    msSpan.style.color = 'yellow';
    msSpan.style.fontSize = '0.8rem';
    msSpan.style.marginLeft = '8px';

    // Laptime
    listItem.textContent = `${hours.textContent}:${min.textContent}:${sec.textContent}`;
    listItem.style.background = 'black';
    listItem.style.borderRadius = '3px';
    listItem.style.color = 'white';

    // Appending Created Items
    listItem.append(msSpan);
    lap.append(listItem);
}



