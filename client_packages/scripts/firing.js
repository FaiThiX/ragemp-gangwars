let firing = 0;

mp.events.add("render", () => {
    if(firing === 0){
        mp.game.player.disableFiring(false);
    };
    if(firing === 1){
        mp.game.player.disableFiring(true);
    };
});

mp.keys.bind(0xBC, true, function() {
    firing = 1;
    mp.events.callRemote("heal");
    setTimeout(function(){
        firing = 0;
    },4000)
});

mp.keys.bind(0xBE, true, function() {
    firing = 1;
    mp.events.callRemote("armor");
    setTimeout(function(){
        firing = 0;
    },4000)
});