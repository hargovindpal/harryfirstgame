var rand;
var score = 0;
var flag = 0;



function start()
{
    document.querySelector("#start").innerHTML = "Started";
    makeBubble(); 
    runTimer();
    
}

//Bubble making function

function makeBubble()
{
    var bubble = "";
    if (flag == 0) 
    {
        for (var i = 1; i <= 72; i++) 
    {
        rand = Math.floor(Math.random() * 10);
        bubble += `<button type="submit" id="bubble">${rand}</button>`
    }
        document.querySelector('#btn-section').innerHTML = bubble;
        flag = 1;
        hit();
    
    }
}

//Timer function

function runTimer() 
{
    var timer = 60;
    var timerBtn = document.querySelector("#timer");
    timerBtn.textContent = timer;

    var interval = setInterval(function () 
    {
        if (timer > 0) 
        {
            timer--;
            timerBtn.textContent = timer;
        }
        else 
        {
            document.querySelector('#btn-section').innerHTML= `<h1>Game Over!</h1>`;    
            document.querySelector("#start").textContent = "Start_Again";
            document.querySelector('#hit').textContent = "-";
            clearInterval(interval);  
            flag = 0;
            score = 0;

        }
        
    }, 1000);
    
}


// Hitting Element Funtion

function hit() {
    rand = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = rand;
    makeBubble();
    flag = 0;
    
}

// Score Increament Funtion

function myscore() {
    score += 10;
    document.querySelector('#score').innerHTML = score;
}

// Matching imput function

document.querySelector("#btn-section").addEventListener('click', function (dets) 
{
    var clickedNumber = Number(dets.target.textContent);
    if (rand == clickedNumber) {
        myscore();
        hit(); 
       
    
    }
});


























