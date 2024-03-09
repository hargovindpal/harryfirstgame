var startBtn = document.querySelector("#start");
var rand;
var score = 0;
var flag = 0;
startBtn.addEventListener('click', function makeBubble() {
    var bubble = "";
    if (flag == 0) {
        startBtn.innerHTML = "End";
        for (var i = 1; i <= 10; i++) {
            rand = Math.floor(Math.random() * 10);
            bubble += `<div id="bubble">${rand}</div>`
            hit();
        }

        document.querySelector('#btn-section').innerHTML = bubble;
        flag = 1;
    }

    runTimer();
    hit();
})

var timer = 3;
document.querySelector("#timer").textContent = timer;
function runTimer() {
    var interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            document.querySelector('#btn-section').innerHTML = `<h1> Game Over </h1>`;
            clearInterval(interval);
            makeBubble();

        }
    }, 1000);
}


function hit() {
    rand = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = rand;
}


function increasescore() {
    score += 10;
    document.querySelector('#score').innerHTML = score;
}



document.querySelector("#btn-section").addEventListener('click', function (dets) {
    var clickedNumber = Number(dets.target.textContent);
    if (rand == clickedNumber) {
        increasescore();
        hit();
        makeBubble();



    }


});


increasescore();
makeBubble();























