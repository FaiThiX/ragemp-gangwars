var sharedVariables = {
    localPlayer: mp.players.local,
    selectionActive: false,
    garageActive: false
};


const toLoad = [
    "scripts/welcome",
    "scripts/death"
];


toLoad.forEach((file) => {
    try {
        require(file);
    } catch (e) {
        mp.gui.chat.push(`Failed to load "${file}".`);
    }
});

//Waffendmg
mp.game.ped.setAiWeaponDamageModifier(0.8);

const date = new Date();

function syncTime() {
    mp.game.time.setClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
}
setInterval(syncTime, 100);