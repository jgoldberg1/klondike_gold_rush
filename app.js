'use strict'

const roller = document.querySelector('.btn');

function rollDice() {
    var min = 1; //lower bound for die
    var max = 6; //upper bound for die
    var numThrows = 5; //number of dice to be rolled
    let rolls = new Array(numThrows);
    var rollCounts = new Map();
    for (var i = min; i <= max; i++) {
        rollCounts.set(i, 0);
    }
    console.log(rollCounts)
    for (var i = 0; i < numThrows; i++) {
        var outcome = Math.floor(Math.random() * (max - min) + min);
        rollCounts.set(outcome, rollCounts.get(outcome)+1);
        rolls[i] = outcome;
    }
    console.log(rolls);
    console.log(rollCounts)
    document.getElementById("rolls").innerHTML = rolls;
    return rollCounts;
}

function calculateScore() {
    var rollCounts = rollDice();
    var score = 0;
    if (rollCounts.get(1) >= 3) {
        score += 1000;
        rollCounts.set(1, rollCounts.get(1)-3);
    }
    for (var i = 2; i <= 6; i++) {
        if (rollCounts.get(i) >= 3) {
            score += i*100;
            rollCounts.set(i, rollCounts.get(i)-3);
        }
    }
    score += rollCounts.get(1)*100;
    score += rollCounts.get(5)*50;
    console.log(score);
    document.getElementById("score").innerHTML = score;
    return score;
}