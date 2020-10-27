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