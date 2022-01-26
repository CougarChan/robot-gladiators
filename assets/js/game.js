window.alert ("welcome to robot gladiators");

//Game States 
// "WIN" - Player's robot defeats the enemy robot
// :"LOSE" - Player's robot is defeated by enemy robot

var playerName = window.prompt("What is your robot's name?!");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney =15000


var enemyName = ["Roborto","Amy", "Roboballs"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("The round is starting");
    var promptFight = window.prompt("Would you like to FIGHT or Skip this battle? Enter 'Fight' or 'Skip'to choose.");
    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  }else if (promptFight === "Skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you want to skip you fucking pussy?");
      
       if(confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight!");
        playerMoney -2000;
    } 
     else {
        fight();

    }
 }      
}
  for( var i=0; i <enemyName.length; i++) {
     fight(enemyName[i]);

  }