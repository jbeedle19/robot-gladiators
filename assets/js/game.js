// Creating variables for player's Name, Health, and Attack
//var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth, playerMoney);

// Creating variables for enemy Robot
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length - 1);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Asks the player to choose to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Logs their choice
    console.log(promptFight);
    
    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing."
    );
    
    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use the result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // If player chooses to skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        console.log(
            playerName + " has " + playerMoney + " points left!"
        );
    }
    // If no (false), ask question again by running fight() again
    else {
       fight(); 
    }
}
}
//fight();