const teams = require("../team_config");

mp.events.add("playerDeath", (player, reason, killer) => {
    console.log("tot")
    if (player.respawnTimer) clearTimeout(player.respawnTimer);
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