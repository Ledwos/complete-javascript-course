'use strict';

// Buttons
const resetBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// Dice
const dice = document.querySelector('.dice');

// Reset score
resetBtn.addEventListener('click', function() {
    const allScores = document.querySelectorAll('.score, .current-score');
    allScores.forEach(function(item) {
        item.textContent = '0';
    })
    dice.classList.add('hidden');
    if (document.querySelector('.player--1').classList.contains('player--active')) {
        switchPlayer();
    }
});

// Random number generator
const random = function() {
    return Math.floor(Math.random() * 6) + 1;
};

// Roll dice
rollBtn.addEventListener('click', function() {
    let pActiveCurrent = document.querySelector('.player--active .current-score');
    let diceVal = random();
    dice.setAttribute('src', `dice-${diceVal}.png`);
    dice.classList.remove('hidden');
    if (diceVal === 1) {
        document.querySelector('.player--active .current-score').textContent = '0';
        switchPlayer();
    } else {
        pActiveCurrent.textContent = Number(pActiveCurrent.textContent) + diceVal;
    }
});

// Hold score
holdBtn.addEventListener('click', function() {
    let pActiveCurrent = document.querySelector('.player--active .current-score');
    let pActiveScore = document.querySelector('.player--active .score');
    console.log(pActiveCurrent);
    if (Number(pActiveCurrent.textContent) > 0) {
        pActiveScore.textContent = Number(pActiveScore.textContent) + Number(pActiveCurrent.textContent);
        pActiveCurrent.textContent = '0';
        // CHANGE PLAYER
        checkWin();
        switchPlayer();
    }
});

// Section magic- player switch
const switchPlayer = function () {
    const allSections = document.querySelectorAll('.player');
    allSections.forEach(function(player) {
        if (player.classList.contains('player--active')) {
            player.classList.remove('player--active');
        } else {
            player.classList.add('player--active');
        }
    })
};

// Win 
const checkWin = function() {
    let pActiveScore = document.querySelector('.player--active .score');
    if (Number(pActiveScore.textContent) >= 100) {
        alert(`${document.querySelector('.player--active .name').textContent} Wins!`);
        console.log(`${document.querySelector('.player--active .name').textContent} Wins!`);   
    }
}