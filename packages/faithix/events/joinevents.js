const database = require("../corestuff/mysql").getPool();
var date = require("moment");
var formatdate = date().format("MM/dd/yyyy h:mm:ss")

mp.events.add('playerSpawn', (player) => {
    player.armourused = 0;
    player.healused = 0;
    player.health = 100;
    player.armour = 100;
});

mp.events.add("playerJoin", (player) => {
    database.query("SELECT * FROM npc", (error, result) => {
        if(error) throw error;

        for(let i = 0; i < result.length; i++){
            player.call("loadnpcs:client", [result[i]]);
        }
    });
});


mp.events.add("playerJoin", (player) => {
    console.log(`[JOIN] ${player.name} joined. (ID: ${player.id} - SC: ${player.socialClub} - ${player.ip})`);
    database.query("SELECT * FROM users WHERE socialclub=?", [player.socialClub], (error, result) => {
        if(error) throw error;
        if(result[0] === undefined || result[0] === null){
            // Create new user in Database
            database.query("INSERT INTO users SET socialclub=?", [player.socialClub]);
            player.kills = 0;
            player.deaths = 0;
            player.admin = 0;
            database.query("SELECT * FROM users WHERE socialclub=?", [player.socialClub], (error, result) => {
                player.sqlid = result[0].id;
            });
            console.info("Created SQL User for " + player.name);
        };

        if(result[0].id){
            //Load user from Database
            database.query("UPDATE users SET lastlogin=? WHERE socialclub=?", [formatdate, player.socialClub]);
            player.kills = result[0].kills;
            player.deaths = result[0].deaths;
            player.admin = result[0].admin;
            player.sqlid = result[0].id;
            console.info("Loaded SQL user for " + player.name);
        };
    });
    
    player.dimension = 0;
    player.isffa = 0;
    player.inshape = null;
    player.armourused = 0;
    player.healused = 0;
    player.cayo = false;
});