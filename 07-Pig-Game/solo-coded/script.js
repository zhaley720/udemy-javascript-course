'use strict';

// MY CODE WITHOUT WATCHING THE WALKTHROUGH
let p1Score = 0;
let p1Current = 0;
let p2Score = 0;
let p2Current = 0;
let p1Turn = true;
let activeGame = true;

const btnNewGame = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

const p1ScoreEl = document.querySelector(`#score--0`);
const p1CurrentEl = document.querySelector(`#current--0`);
const p2ScoreEl = document.querySelector(`#score--1`);
const p2CurrentEl = document.querySelector(`#current--1`);

const p1Section = document.querySelector(`.player--0`);
const p2Section = document.querySelector(`.player--1`);

const diceImg = document.querySelector(`.dice`);

const updateP1Score = () => p1ScoreEl.textContent = p1Score;
const updateP1Current = () => p1CurrentEl.textContent = p1Current;
const updateP2Score = () => p2ScoreEl.textContent = p2Score;
const updateP2Current = () => p2CurrentEl.textContent = p2Current;

const newGame = () => {
    activeGame = true;
    p1Score = 0;
    p1Current = 0;
    p2Score = 0;
    p2Current = 0;
    p1Turn = true;
    updateP1Score();
    updateP1Current();
    updateP2Score();
    updateP2Current();
    p1Section.classList.remove(`player--winner`);
    p2Section.classList.remove(`player--winner`);
    p2Section.classList.remove(`player--active`);
    p1Section.classList.add(`player--active`);
}

const swapActivePlayer = () => {
    if (p1Turn) {
        p1Turn = false;
        p1Section.classList.remove(`player--active`);
        p2Section.classList.add(`player--active`);
    } else {
        p1Turn = true;
        p2Section.classList.remove(`player--active`);
        p1Section.classList.add(`player--active`);
    }
}

const roll = () => Math.trunc(Math.random() * 6) + 1;

const changeDiceImg = (roll) => {
    if (roll === 1) {
        diceImg.src = `dice-1.png`;
    } else if (roll === 2) {
        diceImg.src = `dice-2.png`;
    } else if (roll === 3) {
        diceImg.src = `dice-3.png`;
    } else if (roll === 4) {
        diceImg.src = `dice-4.png`;
    } else if (roll === 5) {
        diceImg.src = `dice-5.png`;
    } else if (roll === 6) {
        diceImg.src = `dice-6.png`;
    }
}

const playerRolls = () => {
    const currentRoll = roll();
    if (!activeGame) {
        return;
    } else if (p1Turn) {
        changeDiceImg(currentRoll);
        if (currentRoll === 1) {
            p1Current = 0;
            updateP1Current();
            swapActivePlayer();
        } else {
            p1Current += currentRoll;
            updateP1Current();
        }
    } else {
        changeDiceImg(currentRoll);
        if (currentRoll === 1) {
            p2Current = 0;
            updateP2Current();
            swapActivePlayer();
        } else {
            p2Current += currentRoll;
            updateP2Current();
        }
    }
}

const playerHolds = () => {
    if (!activeGame) {
        return;
    } else if (p1Turn) {
        p1Score += p1Current;
        p1Current = 0;
        updateP1Score();
        updateP1Current();
        if (p1Score >= 100) {
            activeGame = false;
            p1Section.classList.add(`player--winner`);
        } else {
            swapActivePlayer();
        }
    } else {
        p2Score += p2Current;
        p2Current = 0;
        updateP2Score();
        updateP2Current();
        if (p2Score >= 100) {
            activeGame = false;
            p2Section.classList.add(`player--winner`);
        }
        swapActivePlayer();
    }
}

newGame();

btnNewGame.addEventListener(`click`, newGame);
btnRoll.addEventListener(`click`, playerRolls);
btnHold.addEventListener(`click`, playerHolds);
document.addEventListener(`keyup`, (e) => {
    if (e.code === `Space`) {
        playerRolls();
    } else if (e.code === `Enter`) {
        playerHolds();
    } else if (e.code === `Escape`) {
        newGame();
    }
});