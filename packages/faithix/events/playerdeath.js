const teams = require("../team_config");

mp.events.add("playerDeath", (player, reason, killer) => {
    if (player.respawnTimer) clearTimeout(player.respawnTimer);
    
    if (player.isffa === 1){

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