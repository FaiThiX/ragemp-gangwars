const garage_config = require("../garage_config.json")

function entercolshapehandler(player,shape) {
    player.inshape = shape;
    console.log(shape);
}

function leavecolshapehandler(player) {
    player.inshape = null;
}



let grovecar = mp.colshapes.newSphere(1355.003662109375,-595.8958129882812,74.4878921508789, 3, 0);
let ballascar = mp.colshapes.newSphere(84.15628814697266, -1966.693115234375, 20.939178466796875, 3, 0);
let lsvcar = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let redneckscar = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let mg13car = mp.colshapes.newSphere(1163.2845458984375,-1641.5045166015625,36.96255874633789, 3, 0);
let lcncar = mp.colshapes.newSphere(-1532.0445556640625,78.72225952148438,56.760498046875, 3, 0);
let triadencar = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let lostcar = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);

let groveheli = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let ballasheli = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let lsvheli = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let rednecksheli = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let mg13heli = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let lcnheli = mp.colshapes.newSphere(-1517.93603515625, 70.57810974121094, 61.31343460083008, 3, 0);
let triadenheli = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);
let lostheli = mp.colshapes.newSphere(-931, 217, 67.5, 3, 0);

mp.events.add("whatgarage:server", (player) => {
    if(player.inshape == grovecar){mp.events.call("garage", ["grovecar", "car"])};
    if(player.inshape == ballascar){mp.events.call("garage", ["ballascar", "car"])};
    if(player.inshape == lsvcar){mp.events.call("garage", ["lsvcar", "car"])};
    if(player.inshape == redneckscar){mp.events.call("garage", ["redneckscar", "car"])};
    if(player.inshape == mg13car){mp.events.call("garage", ["mg13car", "car"])};
    if(player.inshape == lcncar){mp.events.call("garage", ["lcncar", "car"])};
    if(player.inshape == triadencar){mp.events.call("garage", ["triadencar", "car"])};
    if(player.inshape == lostcar){mp.events.call("garage", ["lostcar", "car"])};
    if(player.inshape == groveheli){mp.events.call("garage", ["groveheli", "heli"])};
    if(player.inshape == ballasheli){mp.events.call("garage", ["ballasheli", "heli"])};
    if(player.inshape == lsvheli){mp.events.call("garage", ["lsvheli", "heli"])};
    if(player.inshape == rednecksheli){mp.events.call("garage", ["rednecksheli", "heli"])};
    if(player.inshape == mg13heli){mp.events.call("garage", ["mg13heli", "heli"])};
    if(player.inshape == lcnheli){mp.events.call("garage", ["lcnheli", "heli"])};
    if(player.inshape == triadenheli){mp.events.call("garage", ["triadenheli", "heli"])};
    if(player.inshape == lostheli){mp.events.call("garage", ["lostheli", "heli"])};
})

mp.events.add("playerEnteColshape", entercolshapehandler);
mp.events.add("playerExitColshape", leavecolshapehandler);

mp.events.add("garage", (garage, type) => {
    if(type == "car"){}
    if(type == "heli"){}

    mp.events.call("opengarage:client", cars)
})