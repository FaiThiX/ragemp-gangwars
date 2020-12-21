const teams = require("../team_config");

mp.events.add("playerDeath", (player, reason, killer) => {
    if (player.respawnTimer) clearTimeout(player.respawnTimer);

    player.armourused = 0;
    player.healused = 0;

    if (player.isffa === 1){

        killer.health = 100;
        killer.armour = 100;
        player.respawnTimer = setTimeout(() => {
            mp.events.call("spawnffa:server", player);
            player.health = 100;
            player.armour = 100;
    
            clearTimeout(player.respawnTimer);
            player.respawnTimer = undefined;
            return
        }, 8000);
    }

    player.respawnTimer = setTimeout(() => {
        team = player.currentTeam;
        player.spawn(teams[team].Spawnpos);
        player.health = 100;
        player.armour = 100;
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
            //if (weaponData[reason]) msg += ` with ${weaponData[reason].Name}`;
        }
    }

    mp.players.call("pushToKillFeed", [msg]);
});