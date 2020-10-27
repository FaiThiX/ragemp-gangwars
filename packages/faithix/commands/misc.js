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
    }
});

mp.events.addCommand("team", (player, team) =>{
    if(undefined === teams[team]){
        player.outputChatBox("Folgende Teams gibt es: ")
        player.outputChatBox("gf, ballas, lsv, mnc, mg13")
        player.outputChatBox("lcn, triaden, yakuza")
        console.log("failed")
    }
    else{
        player.currentTeam = team;
        console.log("sucess")
    }
});

mp.events.addCommand("export", (player) =>{
    let clothes = [];
    for(i=1; i<=11; i++){
        if(player.getClothes(i).drawable === 255){continue}
        let clothesobject = {}
        let currentclothes = player.getClothes(i);
        clothesobject.id = i;
        clothesobject.drawable = currentclothes.drawable;
        clothesobject.textture = currentclothes.texture;
        if(player.getClothes(i).drawable === null){continue}
        clothes[i] = clothesobject;
    }
    clothes.filter(val => val);
    console.log(JSON.stringify(clothes));
});