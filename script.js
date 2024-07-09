let setIntervalBtn = document.getElementById("setInterval");
let clearIntervalBtn = document.getElementById("clearInterval");
let valueElement = document.getElementById("value");

let counterValue = 1;
let uniqueId = null;

setIntervalBtn.onclick = function(){
    uniqueId = setInterval(function(){
        valueElement.textContent = counterValue;
        counterValue = counterValue + 1;
    },1000);  // Exectues for every 1 second (1 second = 1000 milliseconds)
}

clearIntervalBtn.onclick = function(){
    clearInterval(uniqueId); // cancel the schedule
}