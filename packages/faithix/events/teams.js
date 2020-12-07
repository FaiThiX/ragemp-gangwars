const teams = require("../team_config");

mp.events.add("selectteam:server", (player, frak) => {
    player.currentTeam = frak;
    player.call("closefrakbrowser:client")
})

mp.events.add("requestSpawn:server",(player)=>{
    team = player.currentTeam
    player.spawn(teams[team].Spawnpos)    
    for(const val of teams[team].Clothes){
        player.setClothes(Number(val.id), Number(val.drawable), Number(val.texture),2)
    }
    for(const val of teams[team].Props){
        player.setProp(Number(val.id), Number(val.drawable), Number(val.texture))
    }
    player.armour = 100;
    player.health = 100;
 })

mp.events.add("heal", (player) => {
    if(player.vehicle) return player.notify('~r~Im Auto Verbandskoffer ziehen?!');
    if(player.healused >= 11) return player.notify('~r~Keine Verbandskästen mehr verfügbar');
    player.health = 100;
    player.notify('~g~Heal zum ' + player.healused + 'x benutzt');
    player.healused = player.healused +=1;
    
});

mp.events.add("armor", (player) => {
    if(player.vehicle) return player.notify('~r~Im Auto Rüstung ziehen?!');
    if(player.armorused >= 6) return player.notify('~r~Keine Rüstung mehr verfügbar');
    player.armour = 100;
    player.notify('~g~Rüstung zum ' + player.armorused + 'x angelegt');
    player.armorused = player.armorused +=1;
});

