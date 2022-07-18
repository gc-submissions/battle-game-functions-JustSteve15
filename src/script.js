"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
    const randNum = Math.round(Math.random());

    return randNum ? opt2 : opt1;
};

const attackPlayer = function (health) {
    return health - randomDamage();
};

const logHealth = (player, health) =>
    console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} deafeated ${loser}`);

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health){
    while (true) {
        let attacker = chooseOption(player1, player2);

        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        }
    }
}
