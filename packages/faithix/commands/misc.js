const teams = require("../team_config");


mp.events.addCommand("pos",(player) => {
    player.outputChatBox(`${player.position}`);
    console.log(player.position.x + ", " +  player.position.y + ", " + player.position.z);
    return;
});

mp.events.addCommand("car",(player, vehName)=>{
    if (player) {
    let team = player.currentTeam;
    let pos = player.position;
    pos.x +=2;
    let veh = mp.vehicles.new(mp.joaat(vehName),pos)
        veh.dimension = player.dimension
        veh.numberPlate = teams[team].Teamname;
        veh.setColor(teams[team].color, teams[team].color)
        veh.spawnedBy = player.name;
        veh.modelname = vehName;
        player.putIntoVehicle(veh, -1);
    }
});

mp.events.addCommand("team", (player, team) =>{
    //player.call("teamchange:client")
    
    if(undefined === teams[team]){
        player.outputChatBox("Folgende Teams gibt es: ")
        player.outputChatBox("gf, ballas, lsv, rednecks, mg13")
        player.outputChatBox("lcn, triaden, lost")
    }
    else{
        player.currentTeam = team;
        player.position = teams[team].Spawnpos;
        for(const val of teams[team].Clothes){
            player.setClothes(Number(val.id), Number(val.drawable), Number(val.texture), 2)
        }
        for(const val of teams[team].Props){
            player.setProp(Number(val.id), Number(val.drawable), Number(val.texture))
        }
        player.outputChatBox("Du bist jetzt im Team: " + teams[team].Teamname)
    }
});


mp.events.addCommand("cleanup", (player) => {
    mp.vehicles.forEach((vehicle) => { vehicle.destroy(); })
    })

mp.events.addCommand('rep', (player) => {
    if (player.vehicle)
        player.vehicle.repair();
    else
        player.outputChatBox("Du befindest dich in keinem Fahrzeug!");
});

mp.events.addCommand("respawn", (player) => {
    player.health = 0;
})