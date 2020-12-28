const teams = require("../team_config");
const database = require("../corestuff/mysql").getPool();

var ffa = {}
var markers = {}
var colshapes = {}

function randomspawn(wffa){
    wffa = Number(wffa)
    const keys = Object.keys(ffa[wffa])
    const randIndex = Math.floor(Math.random() * keys.length)
    const randKey = keys[randIndex]
    return randKey
}


// Create ffa json object in cache for later use
database.query("SELECT * FROM ffa_spawns", (error, result) => {
    if(error) throw error;
    
    result.forEach(element => {
        if(ffa[element.ffa] === undefined){
            ffa[element.ffa] = [];
        };
        ffa[element.ffa].push(element);
    });
});

//eval('let colshape' + element.id) = 
let someColShape = mp.colshapes.newSphere(198.4713134765625, -936.09033203125, 24.13947868347168, 101, 1001);

//Marker loader from SQL
database.query("SELECT * FROM markers", (error, result) => {
    if(error) throw error;

    result.forEach(element => {
        mp.markers.new(element.type, new mp.Vector3(element.x, element.y, element.z - 4), element.radius,{
            color: [element.r, element.g, element.g, element.a],
            visible: true,
            dimension: element.dim
        });
    });
});

function playerExitColshapeHandler(player, shape) {
  if(shape == someColShape) {
    if(player.isffa === 1){
        player.health = 0;
    };
  };
};

mp.events.add("playerExitColshape", playerExitColshapeHandler);

mp.events.add("spawnffa:server", (player) => {
    spawn = randomspawn(player.whatffa);
    player.dimension = player.whatffa + 1000;
    player.spawn(ffa[player.whatffa][spawn]);
});

mp.events.addCommand("ffa", (player, ffanr) => {
    if(player.isffa === 0){
        if(ffanr === "1"){
            ffanr = Number(ffanr);
            player.isffa = 1;
            player.whatffa = ffanr;
            mp.events.call("spawnffa:server", player);
            return;
        }
    return;
    };
    if(ffanr === null || ffanr === undefined){
        player.notify("~q~~h~FFA Nummer angeben");
        player.notify("~g~~h~Möglichkeiten: 1");
        return;
    };
    if(player.isffa === 1){
        player.notify("~r~~h~Du bist bereits im FFA");
        return;
    };
});

mp.events.addCommand("quitffa", (player) => {
    if(player.isffa === 0){
        player.notify("~o~~h~Du bist nicht im FFA"); 
        return;
    };
    player.isffa = 0;
    player.dimension = 0;
    player.position = teams[player.currentTeam].Spawnpos;
});