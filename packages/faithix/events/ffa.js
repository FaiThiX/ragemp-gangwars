const teams = require("../team_config");
const ffa = require("../ffa");

function randomspawn(wffa){
    wffa = Number(wffa)
    const keys = Object.keys(ffa[wffa])
    const randIndex = Math.floor(Math.random() * keys.length)
    const randKey = keys[randIndex]
    return randKey
}


mp.events.add("spawnffa:server", (player) => {
    spawn = randomspawn(player.whatffa);
    player.dimension = player.whatffa + 1000;
    player.spawn(ffa[player.whatffa][spawn]);
})

mp.events.addCommand("ffa", (player, ffanr) => {
    if(player.isffa === 1){
        player.notify("~r~~h~Du bist bereits im FFA")
        return
    }
    if(ffanr === null || ffanr === undefined){
        player.notify("~q~~h~FFA Nummer angeben")
        return
    }
    ffanr = Number(ffanr);
    player.isffa = 1;
    player.whatffa = ffanr
    mp.events.call("spawnffa:server", player);
})

mp.events.addCommand("wffa",(player) =>{
    console.log(player.whatffa)
})

mp.events.addCommand("isffa",(player) =>{
    console.log(player.isffa)
})

mp.events.addCommand("wdim", (player) =>{
    console.log(player.dimension);
})

mp.events.addCommand("quitffa", (player) => {
    if(player.isffa === 0){
        player.notify("~o~~h~Du bist nicht im FFA"); 
        return
    }
    player.isffa = 0;
    player.dimension = 0;
    player.position = teams[player.currentTeam].Spawnpos
})

//119