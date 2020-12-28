const teams = require("../team_config");

mp.events.add("playerDeath", (player, reason, killer) => {
    if (player.respawnTimer) clearTimeout(player.respawnTimer);

    if(player.cayo === true){
        player.respawnTimer = setTimeout(() => {
            player.spawn(new mp.Vector3(4840.571, -5174.425, 2.0));
            clearTimeout(player.respawnTimer);
            player.respawnTimer = undefined;
            return;
        }, 8000);
    };

    if (player.isffa === 1){

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

    player.respawnTimer = setTimeout(() => {
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
})

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