'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number!`;
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 75;

// console.log(document.querySelector(`.guess`).value);
// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let won = false;

// document.querySelector(`.number`).textContent = secretNumber;
console.log(`secret number : `, secretNumber);
console.log(`score : `, score);

const changeMessage = (message) => document.querySelector(`.message`).textContent = message;
const setScore = () => document.querySelector(`.score`).textContent = score;

document.querySelector(`.check`).addEventListener(`click`, () => {
    const guess = Number(document.querySelector(`.guess`).value);
    
    console.log(`guess : `, guess);

    if (won) {
        changeMessage(`Bro, you already won, stop...`);
    } else if (score <= 1) {
        score = 0;
        setScore();
        changeMessage(`😖 You Lose!`);
    } else if (guess < 1 || guess > 20) {
        changeMessage(`Guess Out of Range`);
    } else if (!guess) {
        changeMessage(`❌ No Number!`);
    } else if (guess === secretNumber) {
        won = true;
        changeMessage(`✔️ Correct Number!`);
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector(`.number`).style.color = `#60b347`;
        // document.querySelector(`.number`).style.width = `30rem`;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        if (score >= highScore) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        changeMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
        score--;
        setScore();
    }
    console.log(`score : `, score);
});

document.querySelector(`.again`).addEventListener(`click`, () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    won = false;
    console.log(`secret number : `, secretNumber);
    
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.color = `#222`;
    // document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.guess`).value = ``;
    changeMessage(`Start Guessing...`);
    setScore();
});