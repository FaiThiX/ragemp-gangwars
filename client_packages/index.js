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
    "scripts/animsync"
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
let Hustlers = mp.peds.new(mp.game.joaat('s_m_y_construct_02'), new mp.Vector3(-931, 217, 67.5), 110.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);

let Ballas = mp.peds.new(mp.game.joaat('g_m_y_ballaeast_01'), new mp.Vector3(84.15628814697266, -1966.693115234375, 20.939178466796875), 230.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);

let grove = mp.peds.new(mp.game.joaat('mp_m_famdd_01'), new mp.Vector3(1355.003662109375,-595.8958129882812,74.4878921508789), 350.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);

let mg13 = mp.peds.new(mp.game.joaat('ig_jimmyboston'), new mp.Vector3(1163.2845458984375,-1641.5045166015625,36.96255874633789), 200.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);

let ica = mp.peds.new(mp.game.joaat('u_m_m_jewelthief'), new mp.Vector3(-321.4331359863281,220.111572265625,87.83835906982422), 100.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);

let lcn = mp.peds.new(mp.game.joaat('u_m_m_jewelthief'), new mp.Vector3(-1532.0445556640625,78.72225952148438,56.760498046875), 0.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);

let lcnHeli = mp.peds.new(mp.game.joaat('u_m_m_jewelthief'), new mp.Vector3(-1517.93603515625, 70.57810974121094, 61.31343460083008), 45.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);

let hustlersHeli = mp.peds.new(mp.game.joaat('s_m_y_construct_02'), new mp.Vector3(-972.427978515625, 163.80091857910156, 63.22921371459961), 50.3266, (streamPed) => {
    streamPed.setAlpha(0);
}, 0);


//radio off
mp.events.add("render", () => {

    if (mp.players.local.vehicle) {
        mp.game.audio.setRadioToStationName("OFF");
        mp.game.audio.setUserRadioControlEnabled(true);
    }

});
