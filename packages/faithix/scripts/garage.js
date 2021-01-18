const garage_config = require("../garage_config.json");
const teams = require("../team_config");
const database = require("../corestuff/mysql").getPool();

garage_colshapes = [];


function entercolshapehandler(player,shape) {
    player.setVariable("shapedata", shape);
}

function leavecolshapehandler(player) {
    player.setVariable("shapedata", null);
}

mp.events.add("playerEnterColshape", entercolshapehandler);
mp.events.add("playerExitColshape", leavecolshapehandler);

database.query("SELECT * from colshapes", (error, result) => {
    if(error) throw error;
    
    for(let i = 0; i < result.length; i++){
        garage_colshapes[result[i].id] = mp.colshapes.newSphere(result[i].x, result[i].y, result[i].z, result[i].size, result[i].dim );
        garage_colshapes[result[i].id].styletype = "garage";
    };
});

mp.events.add("opengarage:server", (player) => {
    if(mp.players.exists(player)){
        if(player.getVariable("shapedata")){
            if((player.getVariable("shapedata").styletype === "garage")){
                player.call("opengarage:client");
            };
        };
    };
});

mp.events.add("spawncar:server", (player, args) => {
    var car;
    if(args == 1){car = "revolter"};
    if(args == 2){car = "drafter"};
    if(args == 3){car = "jugular"};
    if(args == 4){car = "schafterg"};
    if(args == 5){car = "kuruma"};
    if(args == 6){car = "bf400"};
    if(args == 7){car = "bati"};
    if(args == 8){car = "supervolito"};
    
    if(player.isffa === 0 && mp.players.exists(player)){
        if (args < 8) {
            let pos = garage_config[player.currentTeam].spawnpoint_car
            let veh = mp.vehicles.new(mp.joaat(car),pos, {
                heading: parseInt(garage_config[player.currentTeam].heading_car),
                dimension: player.dimension
            });
            veh.numberPlate = teams[player.currentTeam].Teamname;
            veh.setColor(teams[player.currentTeam].color, teams[player.currentTeam].color);
            veh.spawnedBy = player.name;
            veh.modelname = car;
            player.putIntoVehicle(veh, -1);
        }else if(args == 8){
            let pos = garage_config[player.currentTeam].spawnpoint_heli;
            let veh = mp.vehicles.new(mp.joaat(car),pos)
            veh.dimension = player.dimension;
            veh.numberPlate = teams[player.currentTeam].Teamname;
            veh.setColor(teams[player.currentTeam].color, teams[player.currentTeam].color);
            veh.spawnedBy = player.name;
            veh.modelname = car;
            veh.heading = garage_config[player.currentTeam].heading_heli;
            player.putIntoVehicle(veh, -1);
        }
    }
});