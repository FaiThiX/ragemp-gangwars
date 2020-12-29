const garage_config = require("../garage_config.json")
const database = require("../corestuff/mysql").getPool();

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
        var str = "const colshape"+result[i].id+" = mp.colshapes.newSphere(" + result[i].x + ", " + result[i].y + ", " + result[i].z + ", " + result[i].size + ", " + result[i].dim + ")";
        var coltype = "colshape" + result[i].id + ".fraktype = " + result[i].fraktype;
        //Eval() to make function from string
        eval(str);
        eval(coltype);
    };
});

mp.events.add("opengarage:server", (player) => {
    player.call("opengarage:client")
});

mp.events.add("spawncar:server", (player) => {
    
});