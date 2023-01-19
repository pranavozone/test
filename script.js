let start = document.getElementById("start-btn");
let stop = document.getElementById("stop");
let rear_tyre = document.getElementById("rear-tyre");
let front_tyre = document.getElementById("front-tyre");
let sound = new Audio("carengine.mp3")

let startFunc = () => {
    console.log("Started")
    rear_tyre.classList.add("changeTyreColor");
    front_tyre.classList.add("changeTyreColor");
    sound.play();
    sound.currentTime = 0;
}
let stopFunc = () => {
console.log("Stopped")
    rear_tyre.classList.remove("changeTyreColor");
    front_tyre.classList.remove("changeTyreColor");
    sound.pause();
}