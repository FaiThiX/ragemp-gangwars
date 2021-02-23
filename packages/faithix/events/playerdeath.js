const teams = require("../team_config");

function ffaspawn(player) {
    mp.events.call("spawnffa:server", player);
}

function cayospawn (player){
    player.spawn(new mp.Vector3(4840.571, -5174.425, 2.0));
}

function spawn(player) {
    player.spawn(teams[player.currentTeam].Spawnpos);
}

mp.events.add("playerDeath", (player, reason, killer) => {
    
    console.log("[DEATH] Player: " + player.name + " died because " + reason + " !")

    if(killer && killer.id !== player.id){
        player.deaths = player.deaths += 1;
        killer.kills = killer.kills += 1;
    };
    
    if(player.cayo === true){
        setTimeout(() => {
            cayospawn(player);
        }, 8000);
    }
    else if(player.isffa === 1){
        killer.health = 100;
        killer.armour = 100;
        setTimeout(() => {
            ffaspawn(player);
        }, 8000);
    }
    else{
        setTimeout(() => {
            spawn(player);
        }, 8000);
    };
});

mp.events.add("playerDeath", (player, reason, killer) => {
    let msg = `${player.name} ist gestorben`;

    if (killer) {
        if (killer.name == player.name) {
            msg = `${player.name} hat Selbstmord begangen`;
        } else {
            msg = `${killer.name} hat ${player.name} getötet`;
        }
    }

    mp.players.call("pushToKillFeed", [msg]);
});