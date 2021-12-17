'use strict'


/*
Generates dice rolls: 5 random numbers between 1 and 6. Tallies the numbers of roll values.
PARAMETERS: none
RETURNS: rollCounts: a Map whose key-value pairs correspond to a value rolled (key) and the
number of times the value has been rolled (value)
FUNCTION CALLS: none
*/
function rollDice() {
    var min = 1; //lower bound for die
    var max = 6; //upper bound for die
    var numThrows = 5; //number of dice to be rolled
    var rollCounts = [];
    for (var i = min; i <= max; i++) { //fill array with zeroes
        rollCounts[i] = 0;
    }
    document.getElementById("roll_text").innerHTML = "You rolled: "
    console.log(rollCounts);
    for (var i = 0; i < numThrows; i++) { //generate and print rolls
        var outcome = Math.floor(Math.random() * (max - min) + min);
        document.getElementById("r"+i).innerHTML = outcome;
        rollCounts[outcome] += 1;
    }
    console.log(rollCounts);
    return rollCounts;
}

/*
Calculates the score for a set of rolls, as generated by rollDice()
PARAMETERS: none
RETURNS: none
FUNCTION CALLS: rollDice(), pickFlavorText()
*/
function calculateScore() {
    var rollCounts = rollDice();
    var score = 0;
    if (rollCounts[1] >= 3) { //special case score for triple 1s
        score += 1000;
        rollCounts[1] =- 3;
    }
    for (var i = 2; i <= 6; i++) { //score for other triples
        if (rollCounts[i] >= 3) {
            score += i*100;
            rollCounts[i] -= 3;
        }
    }
    score += rollCounts[1]*100; //score for single 1s
    score += rollCounts[5]*50; //score for single 5s
    console.log(score);
    document.getElementById("score_text").innerHTML = "You scored:";
    document.getElementById("score").innerHTML = score+" Points!";
    pickFlavorText(score);
}

/*
Picks flavor text to display based on score
PARAMETERS: score: a number, the score used to pick flavor text 
RETURNS: none
FUNCTION CALLS: none
*/
function pickFlavorText(score) {
    var flavorText = [
        "The motherlode! Set up a mine!",
        "Paydirt! You found gold nuggets!",
        "You found gold dust!",
        "Just sand and gravel. Better luck next time!"
    ];
    var scoreInterval = [1000, 200, 0];
    if (score >= scoreInterval[0]) {
        document.getElementById("flavor_text").innerHTML = flavorText[0];
    }
    else if (score < scoreInterval[0] && score >= scoreInterval[1]) {
        document.getElementById("flavor_text").innerHTML = flavorText[1];
    }
    else if (score < scoreInterval[1] && score > scoreInterval[2]) {
        document.getElementById("flavor_text").innerHTML = flavorText[2];
    }
    else {
        document.getElementById("flavor_text").innerHTML = flavorText[3];
    }
}
