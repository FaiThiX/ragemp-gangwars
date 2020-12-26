const database = require("../corestuff/mysql").getPool();

mp.events.add("playerQuit", (player, exitType, reason) => {
    database.query("INSERT INTO users SET kills=?, deaths=?", [player.kills, player.deaths]);
    console.log("User " + player.name + " disconnected. Saved data to Database");
});