const teams = require("../team_config");
const ffa = require("../ffa");

function randomspawn(wffa){
    wffa = Number(wffa)
    const keys = Object.keys(ffa[wffa])
    const randIndex = Math.floor(Math.random() * keys.length)
    const randKey = keys[randIndex]
    return randKey
}

let someColShape = mp.colshapes.newSphere(198.4713134765625, -936.09033203125, 24.13947868347168, 101, 1001);

mp.markers.new(1, new mp.Vector3(198.4713134765625, -936.09033203125, 20.13947868347168), 200,
    {
        color: [224, 50, 50, 255],
        visible: true,
        dimension: 1001
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
        ffanr = Number(ffanr);
        player.isffa = 1;
        player.whatffa = ffanr;
        mp.events.call("spawnffa:server", player);
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
})

mp.events.addCommand("quitffa", (player) => {
    if(player.isffa === 0){
        player.notify("~o~~h~Du bist nicht im FFA"); 
        return;
    };
    player.isffa = 0;
    player.dimension = 0;
    player.position = teams[player.currentTeam].Spawnpos;
})