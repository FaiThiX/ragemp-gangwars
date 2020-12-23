mp.events.add({
    'entityStreamIn' : (entity) =>  {
        if(entity.type == 'player')
        {
          if (entity.hasVariable("animData")) {
            const value = entity.getVariable("animData");
            if (null != value) {
                const anim = value.split("%");
                loadAnimDict(anim[0], function() {
                    mp.players.exists(entity) && 0 !== entity.handle && entity.taskPlayAnim(anim[0], anim[1], 8.0, 8.0, -1, parseInt(anim[2]), 1, !1, !1, !1)
                })
            }
          }          
        }
    },
});


mp.events.addDataHandler("animData", function(a, b) {
    if (0 !== a.handle)
        if (null != b) {
            const c = b.split("%");
            loadAnimDict(c[0], function() {
                mp.players.exists(a) && 0 !== a.handle && (a.clearTasksImmediately(), a.taskPlayAnim(c[0], c[1], 8.0, 8.0, -1, parseInt(c[2]), 1, !1, !1, !1))
            })
        } //else a.clearTasksImmediately()
});

function loadAnimDict(a, b) {
    if (mp.game.streaming.hasAnimDictLoaded(a)) return void b();
    mp.game.streaming.requestAnimDict(a);
    let c = setInterval(function() {
        mp.game.streaming.hasAnimDictLoaded(a) && (clearInterval(c), b())
    }, 100)
}
