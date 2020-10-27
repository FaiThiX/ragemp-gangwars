const teams = require("../team_config");

mp.events.add("selectteam:server", (player, frak) => {
    player.currentTeam = frak;
    player.call("closefrakbrowser:client")
})

mp.events.add("requestSpawn:server",(player)=>{
    team = player.currentTeam
    player.spawn(teams[team].Spawnpos)    
    for(const val of teams[team].Clothes){
        player.setClothes(val.id,val.drawable,val.texture,2)
    }
    for(const val of teams[team].Props){
        player.setProp(val.id,val.drawable,val.texture)
    }
    player.armour = 100;
    player.health = 100;
 })