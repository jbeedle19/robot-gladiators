// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// Creating variables for player's Name, Health, and Attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// Creating variables for enemy Robot
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
    // Asks the player to choose to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Logs their choice
    console.log(promptFight);
    
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing."
    );
    
    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // Award player money for winning
        playerMoney = playerMoney + 20;

        // Leave while() loop since enemy is dead
        break;
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
        // Leave while() loop if player is dead
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}     
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // Let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    // Pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    
    // Reset enemyHealth before starting new fight
    enemyHealth = 50;

    // Use debugger to pause script from runnning and check what's going on at the moment in the code
    // debugger;

    // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}