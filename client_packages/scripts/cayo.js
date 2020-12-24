mp.events.add("load_cayo:client",(state) => {
    mp.game.invoke("0x9A9D1BA639675CF1", "HeistIsland", state);
    mp.game.invoke("0x5E1460624D194A38", state);
})