const teams = require("../team_config");

mp.events.add("playerDeath", (player, reason, killer) => {
    try {
        if(mp.players.exists(player)){
            if (player.respawnTimer) clearTimeout(player.respawnTimer);

            if(player.cayo === true){
                player.respawnTimer = setTimeout(() => {
                    player.spawn(new mp.Vector3(4840.571, -5174.425, 2.0));
                    clearTimeout(player.respawnTimer);
                    player.respawnTimer = undefined;
                    return;
                }, 8000);
            }
            else if (player.isffa === 1){

                if(killer && killer.id !== player.id){
                    killer.health = 100;
                    killer.armour = 100;
                    player.deaths = player.deaths += 1;
                    killer.kills = killer.kills += 1;
                };
                if (killer === undefined){
                    player.deaths = player.deaths += 1;
                };
                player.respawnTimer = setTimeout(() => {
                    mp.events.call("spawnffa:server", player);    
                    clearTimeout(player.respawnTimer);
                    player.respawnTimer = undefined;
                    return;
                }, 8000);
            }
            else {
                player.respawnTimer = setTimeout(() => {
                    console.log("[DEATH] Player: " + player.name + " died because " + reason + " !")
                    if (killer === undefined){
                        player.deaths = player.deaths += 1;
                    };
                    if (killer && killer.id !== player.id){
                        player.deaths = player.deaths += 1;
                        killer.kills = killer.kills += 1;
                    };
            
                    player.spawn(teams[player.currentTeam].Spawnpos);
                    player.dimension = 0;
                    clearTimeout(player.respawnTimer);
                    player.respawnTimer = undefined;
                }, 8000);
            
            };
        };
    } catch (error) {
        console.log(error)
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