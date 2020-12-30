const teamdata = require("../team_config.json");

let chatcolor = player.currentTeam ? teamdata[player.currentTeam].chatcolor : "#FFFFFF";

mp.events.add("playerChat", (player, message) => {
    if(player.health <= 0) return;
    mp.players.broadcast(`!{${chatcolor}}${player.name}: !{#FFFFFF}${message}`);
});