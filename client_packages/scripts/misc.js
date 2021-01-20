const markers = [];
const player = mp.players.local;

mp.events.add("loadmarker:client", (element) => {
    markerhandler(element, "load");
});

mp.events.add("removemarker:client", () => {
    markerhandler(null, "unload");
})

function markerhandler(element, state) {
    if (state === "load") {
        markers[element.id] = mp.markers.new(0, new mp.Vector3(element.x, element.y, element.z), 2,{color: [77, 216, 49, 255], visible: true, dimension: player.dimension});
    } else if (state === "unload" && markers.length > 0) {
        for(let i in markers) {
            markers[i].destroy();
        }
    }
};

mp.events.add('freeze', ()=>{
    localPlayers.freezePosition(true);
})

mp.events.add('unfreeze', ()=>{
    localPlayers.freezePosition(false);
})

mp.events.add('godmodeOn', () => {
    mp.game.player.setInvincible(true);
});

mp.events.add('godmodeOff', () => {
    mp.game.player.setInvincible(false);
});

mp.events.add('names', () => {
    mp.nametags.enabled = true;
});
  
mp.events.add('namesoff', () => {
    mp.nametags.enabled = false;
});

mp.events.add('invisible', () => {
    mp.game.player.setAlpha(0);
});

mp.events.add('visible', () => {
    mp.game.player.setAlpha(255);
});