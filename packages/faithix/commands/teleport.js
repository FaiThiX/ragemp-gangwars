const teams = require("../team_config");
const crew = require("../team");

mp.events.addCommand("warp",(player, point)=>{
    if(point === "lsia"){
        player.position = new mp.Vector3(-1147, -3149, 13.938328742980957)
    }
    else if(point === "lcn"){
        player.position = new mp.Vector3(-1583, 84, 59.1662712097168)
    }
    else if(point === "ballas"){
        player.position = new mp.Vector3(102, -1937, 20.80370330810547)
    }
    else if(point === "grapeseed"){
        player.position = new mp.Vector3(2469, 4955, 45.1041259765625)
    }
    else if(point === "paletto"){
        player.position = new mp.Vector3(137, 6420, 31.30844497680664)
    }
    else if(point === "observ"){
        player.position = new mp.Vector3(-412, 1170, 325.842529296875)
    }
    else if(point === "sandy"){
        player.position = new mp.Vector3(1956, 3765, 32.201751708984375)
    }
    else if(point === "1v1"){
        player.position = new mp.Vector3(-778, -770, 84.8985519409179)
    }
    else if(point === "park"){
        player.position = new mp.Vector3(196, -937, 31)
    }
    else {
        player.outputChatBox("Mögliche Warppunkte:");
        player.outputChatBox("lsia, lcn, ballas, sandy,");
        player.outputChatBox("grapeseed, paletto, observ, 1v1");
    }
})

mp.events.addCommand('port', (player, name) => {
    mp.players.forEach(_player => {
        if(_player.name.toLowerCase() === name.toLowerCase())
            player.position = _player.position;
    });
    console.log("[PORT] " + player.name + " hat sich zu " + name + " teleportiert!");
});

mp.events.addCommand('dim', (player, dim) => {
    player.dimension = Number(dim)
});

mp.events.addCommand("cayo", (player) =>{
    if(player.cayo == true){
        player.call("load_cayo:client", ([false]));
        player.cayo = false;
        player.position = teams[player.currentTeam].Spawnpos;
        return;
    };
    if(player.cayo == false){
        player.call("load_cayo:client", ([true]));
        player.cayo = true;
        player.position = new mp.Vector3(4840.571, -5174.425, 2.0);
        return;
    }
})