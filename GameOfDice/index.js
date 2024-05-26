
whoWins();
theDices();
var playerOne;
var playerTwo;


function whoWins() {


    playerOne = Math.floor(Math.random() * 6) + 1;
    playerTwo = Math.floor(Math.random() * 6) + 1;

    if (playerOne > playerTwo) {
        document.querySelector(".player-one").style.opacity = "1";
        document.querySelector(".player-two").style.opacity = "0";
        document.querySelector("h1").textContent = "PLAYER 1 WINS";
    }
    else if (playerOne === playerTwo) {
        document.querySelector(".player-one").style.opacity = "1";
        document.querySelector(".player-two").style.opacity = "1";
        document.querySelector("h1").textContent = "IT'S A TIE!";
    }
    else {
        document.querySelector(".player-one").style.opacity = "0";
        document.querySelector(".player-two").style.opacity = "1";
        document.querySelector("h1").textContent = "PLAYER 2 WINS";
    }
}

function theDices() {
    if (playerOne === 1) {
        document.querySelector('.img1').setAttribute('src', './images/dice1.png')
    }
    else if (playerOne === 2) {
        document.querySelector('.img1').setAttribute('src', './images/dice2.png')
    }
    else if (playerOne === 3) {
        document.querySelector('.img1').setAttribute('src', './images/dice3.png')
    }
    else if (playerOne === 4) {
        document.querySelector('.img1').setAttribute('src', './images/dice4.png')
    }
    else if (playerOne === 5) {
        document.querySelector('.img1').setAttribute('src', './images/dice5.png')
    }
    else if (playerOne === 6) {
        document.querySelector('.img1').setAttribute('src', './images/dice6.png')
    }

    if (playerTwo === 1) {
        document.querySelector('.img2').setAttribute('src', './images/dice1.png')
    }
    else if (playerTwo === 2) {
        document.querySelector('.img2').setAttribute('src', './images/dice2.png')
    }
    else if (playerTwo === 3) {
        document.querySelector('.img2').setAttribute('src', './images/dice3.png')
    }
    else if (playerTwo === 4) {
        document.querySelector('.img2').setAttribute('src', './images/dice4.png')
    }
    else if (playerTwo === 5) {
        document.querySelector('.img2').setAttribute('src', './images/dice5.png')
    }
    else if (playerTwo === 6) {
        document.querySelector('.img2').setAttribute('src', './images/dice6.png')
    }
}



