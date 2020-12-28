const database = require("../corestuff/mysql").getPool();

mp.events.add("playerQuit", (player, exitType, reason) => {
    database.query("UPDATE users SET kills=?, deaths=? WHERE socialclub=?",[player.kills, player.deaths, player.socialClub], (error, result) => {
        if(error) throw error;

        console.log("Saved Account for " + player.name);
    });
});