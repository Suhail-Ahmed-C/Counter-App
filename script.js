let count = 0;

// Elements
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const themeToggle = document.getElementById("themeToggle");

// Sounds
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

// Update counter & color
function updateCounter() {
    countDisplay.innerText = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

// Sound play
function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// Button events
increaseBtn.addEventListener("click", () => {
    count++;
   // playSound();
    updateCounter();
});

decreaseBtn.addEventListener("click", () => {
    count--;
    //playSound();
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    //playSound();
    updateCounter();
});

// Keyboard controls
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        count++;
    } else if (event.key === "ArrowDown") {
        count--;
    } else {
        return;
    }
    //playSound();
    updateCounter();
});

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});