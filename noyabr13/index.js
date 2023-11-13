let div = document.querySelector("div");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let stop = document.querySelector(".stop");
let input_number = document.querySelector("input")
let con = document.querySelector("contuine")


let counter;
let counterWorking = false;
let timer = 0;

let totalSeconds = 0
console.log(totalSeconds);

function updateTimer() {
  totalSeconds--;
  let minutes = Math.floor(totalSeconds / 60) 
  let seconds = Math.floor(totalSeconds % 60)

  div.innerHTML = pad(minutes) + ":" + pad(seconds);
}



start.addEventListener(
  "click",
  

  function () {
    totalSeconds = input_number.value*60
    if (counterWorking && seconds == 0) {
      return;
    }
    if (minutes == 0 && seconds == 0) {
        clearInterval(counter)
        
    }
   

    counter = setInterval(updateTimer
        
    , 100);
    counterWorking = true;
  }
);
function pad(num) {
  return num < 10 ? "0" + num : num;
}
reset.addEventListener("click", function () {
totalSeconds = 0
  div.innerText = "00:00"
  clearInterval(counter);
  counterWorking = false;
});

stop.addEventListener("click", function () {
  
  clearInterval(counter);
  console.log(totalSeconds);
  totalSeconds =0
  counterWorking = false;
});


