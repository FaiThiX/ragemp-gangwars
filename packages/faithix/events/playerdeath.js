const teams = require("../team_config");

mp.events.add("playerDeath", (player, reason, killer) => {
    console.log(killer + " hat " + player + " getötet")
    if(player.ffa = true){
        player.spawn(mp.Vector3(201.74649047851562, -930.2860107421875, 30.691999435424805))
    }
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