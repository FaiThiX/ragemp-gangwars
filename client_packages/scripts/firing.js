global.chatopened = false;

mp.keys.bind(0x54, true, (player) => { /// T Key
    if (chatopened === true) return;
  	chatopened = true;
});

mp.keys.bind(0x0D, true, (player) => { /// ENTER Key
    if (chatopened === false) return;
     chatopened = false;
});

mp.keys.bind(0xBC, true, function() {
    if (chatopened === true) return;
    mp.events.callRemote("heal");
    setTimeout(function(){
        firing = 0;
    },4000)
});

mp.keys.bind(0xBE, true, function() {
    if (chatopened === true) return;
    mp.events.callRemote("armor");
    setTimeout(function(){
        firing = 0;
    },4000)
});