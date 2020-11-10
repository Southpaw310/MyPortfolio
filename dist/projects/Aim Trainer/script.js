//variable creation
const squares = document.getElementById("square");
const totalScore = document.getElementById("score");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
const squareContainer = document.getElementById("square-container");
let timer = document.getElementById("timer");
let time = 30;
let score = 0;
const randomPos = (min, max) => Math.floor(Math.random() * (max-min+1)+min);

playGame();

function playGame() {
    play.addEventListener("click", function() {
        let timeRemaining = setInterval(function () {
            timeLeft();
            if (time === 0) {
                clearInterval(timeRemaining);    //stops the timer
                squareContainer.innerHTML = ""; //when the timer reaches 0, clear the squares
            }
        }, 1000)          //update time once every second
        createSquare();
        timer.innerText = time;
    }, { once: true }); //doesn't let the player press "Play" more than once
}

//function that sets timer
function timeLeft() {
    time--;
    timer.innerText = time;
}


//function that creates the squares
function createSquare() {
    let div = document.createElement('div');   //creates the new square
    div.setAttribute("id", "square");         //adds id of "square" to newly created div
    div.style.left = randomPos(10, 90)+'%';  //sets a random position for the square to appear
    div.style.top = randomPos(10, 55)+'vh';
    div.addEventListener("click", function() {
        score++;     //when the square is clicked, increase the score by 1, change totalScore,
        totalScore.innerHTML = score;
        this.classList.add("clicked");      //add class of "clicked"
        squareContainer.removeChild(div);  //this removes all previously created squares
        createSquare();
    });
    //adds the square to the body
    squareContainer.appendChild(div);
}


