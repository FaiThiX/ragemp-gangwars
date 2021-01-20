var sharedVariables = {
    localPlayer: mp.players.local,
    selectionActive: false,
    garageActive: false,
    drawFiringMode: false
};


const toLoad = [
    "scripts/welcome",
    "scripts/death",
    "scripts/firing",
    "scripts/killfeed",
    "scripts/animsync",
    "scripts/cayo",
    "scripts/misc",
    "scripts/garage"
];


toLoad.forEach((file) => {
    try {
        require(file);
    } catch (e) {
        mp.gui.chat.push(`Failed to load "${file}".`);
    }
});

//Waffendmg
mp.game.ped.setAiWeaponDamageModifier(0.75);

const date = new Date();

function syncTime() {
    mp.game.time.setClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
}
setInterval(syncTime, 100);

//garagenpc

mp.events.add("loadnpcs:client", (element) => {
    var npc = "let " + element.fraktion + " = mp.peds.new(mp.game.joaat('" + element.ped + "'), new mp.Vector3(" + element.x + ", " + element.y + ", " + element.z + "), " + element.heading + ", (streamPed) => {streamPed.setAlpha(0);}, 0);"
    eval(npc);
});


//radio off
mp.events.add("render", () => {

    if (mp.players.local.vehicle) {
        mp.game.audio.setRadioToStationName("OFF");
        mp.game.audio.setUserRadioControlEnabled(true);
    }

});
