const teamdata = require("../team_config.json");

mp.events.add("playerChat", (player, message) => {
    let chatcolor = player.currentTeam ? teamdata[player.currentTeam].chatcolor : "#FFFFFF";
    
    if(player.health <= 0) return;
    mp.players.broadcast(`!{${chatcolor}}${player.name}: !{#FFFFFF}${message}`);
});