let timer = 0;
let timerId = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// スタート
startBtn.addEventListener("click",function(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
    clearInterval(timerId);
    timerId = setInterval( function () {
    timer++;
        const ms  = timer % 10;
        const sec = Math.floor(timer / 10) % 60;
        const min = Math.floor(timer / 600) % 60;
        const h   = Math.floor(timer / 36000);

        display.textContent =
            String(h).padStart(2, "0") + ":" +
            String(min).padStart(2, "0") + ":" +
            String(sec).padStart(2, "0") + ":" +
            String(ms).padStart(2, "0");
    }, 100);
});


// ストップ
stopBtn.addEventListener("click", function () {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
    clearInterval(timerId);
});


// リセット
resetBtn.addEventListener("click", function () {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
    clearInterval(timerId);
    timer = 0;
    display.textContent = "00:00:00:00";
});

