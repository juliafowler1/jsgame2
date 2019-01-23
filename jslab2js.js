"use strict";
let wins = 0;
let myHp = 40;
let grantHp = 10;
let userName;
//declare function
function startGame(){
    // prompts the user if they want to play
    //if yes call the startCombat function
    if (prompt("Do you want to play a game?") === "yes") {

        userName = prompt("What is your name?")
    
    } else {
        return "no";
    }
}
startGame();

function startCombat() {
    while (myHp <= 40) {
        if (prompt("Would you like to attack or quit?") === "attack") {
            myHp = myHp - getDmg();
            console.log(`Julia's health is ${myHp}`);
            grantHp = grantHp - getDmg() 
            console.log(`Grant's health is ${grantHp}`);
        } else {
            break;
        }

    (grantHp <= 10)
    
    //if my health goes below zero, I lose
    if (myHp <= 0) {
        console.log("Julia loses, game over");
        break;
    }
    //if Grants health goes below zero, I gain a win and his health is set back to 10
    if (grantHp <= 0) {
        wins++; grantHp = 10;
        console.log("Julia gains one win!");
    }
    //if I have more than 3 wins then I win the game
    if (wins >= 3) {
        console.log("Julia is the winner!");
        break;
    }

    //if my health is less than or equal to zero, Grant wins
    else if (myHp <= 0) {
        console.log("Game over, Grant wins!");
    }
    // else if (startGame.toLowerCase() === "no") {
    //     alert("We'll play another time.");
    //     break;
    // }

}
}
startCombat();

function getDmg() {
            return Math.floor(Math.random() * 5 + 1); 
// returns a random integer from 1 to 10

}




//ask the user to attack or quit
//if you choose to attack call getDmg for both you and grants health
//check wins
//check health