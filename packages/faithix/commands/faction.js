const database = require("../corestuff/mysql").getPool();
const teams = require("../team_config");

mp.events.addCommand("loadcars", (player, faction) => {
    if(player.admin > 5){
        let query = "SELECT * FROM faction_cars WHERE faction=?"
        let args = [faction]
        database.query(query, args, (error, result) => {
            if(error) throw error;
            for(let i in result) {
                let veh = mp.vehicles.new(mp.joaat(result[i].car), new mp.Vector3(result[i].pos_x, result[i].pos_y, result[i].pos_z)); 
                    veh.dimension = 0;
                    veh.numberPlate = result[i].faction;
                    veh.modelname = result[i].car;
                    veh.setColor(teams[result[i].faction].color, teams[result[i].faction].color);
                    veh.rotation = new mp.Vector3(parseFloat(result[i].heading_x), parseFloat(result[i].heading_y), parseFloat(result[i].heading_z));
                    database.query("SELECT * FROM faction_tuning WHERE car=?", [result[i].car], (error_tuning, result_tuning) => {
                        if(error_tuning) throw error_tuning;
                        for(let j in result_tuning){
                            //console.log(result_tuning)
                            veh.setMod(parseInt(result_tuning[j].modtype), parseInt(result_tuning[j].modindex));
                        };
                    });
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

mp.events.addCommand("debugcar", (player, faction) => {
    let vehicle = player.vehicle;
    console.log(faction, vehicle.modelname, vehicle.position.x, vehicle.position.y, vehicle.position.z, vehicle.rotation.x, vehicle.rotation.y, vehicle.rotation.z)
})