const database = require("../corestuff/mysql").getPool();

/* mp.events.addCommand("setcars", (player, faction) => {
    database.query("SELECT * FROM faction_cars WHERE faction=?", [faction], (result,error) => {
        if(error) throw error;
        console.log(result);
        console.log(faction);
        if(mp.players.exists(player)){
            if(player.admin > 3){
                console.log(result);
                for(let i in result) {
                    let veh = mp.vehicles.new(mp.joaat(result[i].car),(result[i].pos_x,result[i].pos_y,result[i].pos_z))
                        veh.dimension = 0;
                        veh.numberPlate = result[i].faction;
                        veh.setColor(teams[result[i].faction].color, teams[result[i].faction].color);
                        veh.heading = (result[i].heading_x,result[i].heading_y,result[i].heading_z);
                };
            };
        };
    });
}); */

mp.events.addCommand("loadcars", (player, faction) => {
    if(player.admin > 5){
        let query = "SELECT * FROM faction_cars WHERE faction=?"
        let args = [faction]
        database.query(query, args, (error, result) => {
            if(error) throw error;
            for(let i in result) {
                let veh = mp.vehicles.new(mp.joaat(result[i].car), new mp.Vector3(result[i].pos_x, result[i].pos_y, result[i].pos_z))
                    veh.dimension = 0;
                    veh.numberPlate = result[i].faction;
                    veh.modelname = result[i].car;
                    console.log("Teamfarbe: " + teams[result[i].faction].color);
                    veh.setColor(teams[result[i].faction].color, teams[result[i].faction].color);
                    veh.rotation = new mp.Vector3(result[i].heading_x, result[i].heading_y, result[i].heading_z);
            };
        });
    };
});

mp.events.addCommand("savecar", (player, faction) => {
    if(player.admin > 5){
        let vehicle = player.vehicle;
        let query = "INSERT INTO faction_cars SET faction=?, car=?, pos_x=?, pos_y=?, pos_Z=?, heading_x=?, heading_y=?, heading_z=?"
        let args = [faction, vehicle.modelname, vehicle.position.x, vehicle.position.y, vehicle.position.z, vehicle.rotation.x, vehicle.rotation.y, vehicle.rotation.z]
        database.query(query, args, (error, result) => {
            if(error) throw error;
            player.outputChatBox("Saved Vehicle to Database!")
        });
    };
});

mp.events.addCommand("rota", (player, _, x, y, z) => {
    let vehicle = player.vehicle;
    vehicle.rotation = new mp.Vector3(x, y, z)
});

mp.events.addCommand("debugcar", (player, faction) => {
    let vehicle = player.vehicle;
    console.log(faction, vehicle.modelname, vehicle.position.x, vehicle.position.y, vehicle.position.z, vehicle.rotation.x, vehicle.rotation.y, vehicle.rotation.z)
})