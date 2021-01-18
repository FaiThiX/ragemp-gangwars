const teamdata = require("../team_config.json");

var chatenabled = true


mp.events.add("playerChat", (player, message) => {
    let chatcolor = player.currentTeam ? teamdata[player.currentTeam].chatcolor : "#FFFFFF";
    
    if(player.health <= 0) return;
    
    if(chatenabled == true || player.admin > 5){
        mp.players.broadcast(`!{${chatcolor}}${player.name}: !{#FFFFFF}${message}`);
    };
});

mp.events.addCommand("allclearchat", (player) => {
    if(player.admin > 6 && mp.players.exists(player)){
        mp.players.forEach(_player => {
            for(let i = 0; i < 10; i++){
                _player.outputChatBox(" ");
            };
        });
    };
});

mp.events.addCommand("clearchat", (player) => {
    if(mp.players.exists(player)){
        for(let i = 0; i < 10; i++){
            player.outputChatBox(" ");
        };
    };
});

mp.events.addCommand("chat", (player, state) => {
    if(player.admin > 8 && mp.players.exists(player)){
        if(state === "enable"){
            chatenabled = true;
            player.outputChatBox("Chat enabled!");
        };
        if(state === "disable"){
            chatenabled = false;
            player.outputChatBox("Chat disabled!");
        };
    };
});

mp.events.addCommand("gambo", (player, state) => {
    if(player.admin > 8 && mp.players.exists(player)){
        if(state === "end"){
            chatenabled = true;
        };
        if(state === "start"){
            chatenabled = false;
            mp.players.forEach(_player => {
                for(let i = 0; i < 10; i++){
                    _player.outputChatBox(" ");
                };
            });
        };
    };
});