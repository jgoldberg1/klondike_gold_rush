from random import random
from random import seed
import math

seed()

def rollDice():
    numThrows = 5
    min = 1
    max = 6
    rollCounts = {}
    rolls = [0]*numThrows
    for i in range(min,max):
        rollCounts[i] = 0
    for i in range(numThrows):
        outcome = math.floor(min + (random() * (max - min)))
        rollCounts[outcome] += 1
        rolls[i] = outcome
    #rollCounts = {1: 0, 2: 0, 3: 3, 4: 0, 5: 1, 6: 0}
    print(rolls)
    return rollCounts

def calculateScore(rollCounts):
    score = 0
    if rollCounts[1] >= 3:
        score += 1000
        rollCounts[1] -= 3
    for i in range(2,6):
        if rollCounts[i] >= 3:
            score += i*100
            rollCounts[i] -= 3
    score += rollCounts[1]*100
    score += rollCounts[5]*50
    return score
    

if __name__ == "__main__":
    inp = "filler"
    while inp != "":
        inp = input("Press enter to roll the dice!")
    rollCounts = rollDice()
    score = calculateScore(rollCounts)
    print(score)
