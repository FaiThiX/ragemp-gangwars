const teams = require("../team_config");
const database = require("../corestuff/mysql").getPool();

mp.events.addCommand("car",(player, vehName = "faggio")=>{
    if(player.isffa === 0 && mp.players.exists(player)){
        if (player) {
            let pos = player.position;
            let veh = mp.vehicles.new(mp.joaat(vehName),pos)
                veh.dimension = player.dimension;
                veh.numberPlate = teams[player.currentTeam].Teamname;
                veh.setColor(teams[player.currentTeam].color, teams[player.currentTeam].color);
                veh.spawnedBy = player.name;
                veh.modelname = vehName;
                player.putIntoVehicle(veh, -1);
        }
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
});

mp.events.addCommand('rep', (player) => {
    if (player.vehicle)
        player.vehicle.repair();
    else
        player.outputChatBox("Du befindest dich in keinem Fahrzeug!");
});

mp.events.addCommand("respawn", (player) => {
    player.health = 0;
})

mp.events.addCommand("loadmarker", (player, ffa) => {
    if(player.admin > 6){
        database.query("SELECT * FROM ffa_spawns WHERE ffa=?", [ffa], (error, result) => {
            if(error) throw error;

            result.forEach(element => {
                player.call("loadmarker:client", [element]);
            });
        });
    };
});

mp.events.addCommand("setspawn", (player, ffa) => {
    database.query("INSERT INTO ffa_spawns SET ffa=?, x=?, y=?, z=?", [ffa, player.position.x, player.position.y, player.position.z]);
    
    var element = {};
    
    element.ffa = ffa;
    element.x = player.position.x;
    element.y = player.position.y;
    element.z = player.position.z;

    player.call("loadmarker:client", [element]);
});

mp.events.addCommand("removemarker",(player) => {
    player.call("removemarker:client");
});

mp.events.addCommand("mod", (player, _, modtype, modindex) => {
    vehicle = player.vehicle;
    vehicle.setMod(parseInt(modtype), parseInt(modindex));
});

mp.events.addCommand("aduty", (player) => {
    if(mp.players.exists(player)){
        if(player.admin > 5){
            if(player.aduty === false || player.aduty === undefined){
                player.aduty = true;
                player.call("names");
                player.call("godmodeOn");
                player.alpha = 0;
                player.outputChatBox("ADuty aktiv");
                console.log("[ADUTY] " + player.name + " ist nun im ADuty!");
                return;
            };
            if(player.aduty === true){
                player.aduty = false;
                player.call("namesoff");
                player.call("godmodeOff");
                player.alpha = 255;
                player.outputChatBox("ADuty deaktiviert");
                console.log("[ADUTY] " + player.name + " ist nun nichtmehr im ADuty!");
                return;
            };
        };
    }
});