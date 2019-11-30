let playerOne = 0;
let playerTwo = 0;
let hp1 = document.getElementById("p1");
let hp2 = document.getElementById("p2");
let numInput = document.querySelector("input");
let endOfGame = false;
let rounds;



document.getElementById("button1").addEventListener("click", function() {
    if (!endOfGame) {
        playerOne ++;
        hp1.textContent = playerOne;
        if (rounds === playerOne || rounds == playerTwo) {
            endOfGame = true;
            hp1.style.color = "#809C76";
        }
    }
});

document.getElementById("button2").addEventListener("click", function() {
    if (!endOfGame) {
        playerTwo ++;
        hp2.textContent = playerTwo;
        if (rounds === playerOne || rounds == playerTwo) {
            endOfGame = true;
            hp2.style.color = "#809C76";
        }
    }
});

document.getElementById("reset").addEventListener("click", function() {
    playerOne = 0;
    playerTwo = 0;
    hp1.textContent = playerOne;
    hp2.textContent = playerTwo;
    hp1.style.color = "#DD2B2E";
    hp2.style.color = "#DD2B2E";
    endOfGame = false;
});

numInput.addEventListener("change", function() {
    document.querySelector("#prounds").textContent = numInput.value;
    rounds = Number(numInput.value);
})