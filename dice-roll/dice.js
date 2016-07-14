function rollDice(){
    var die = document.getElementById("die");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceRolled = d1;
    die.innerHTML = d1;
    
    status.innerHTML = "You rolled a "+diceRolled+ "!";
    }