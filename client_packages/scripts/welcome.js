const cameraPos = new mp.Vector3(1865.045, -1754.456, 205.8218);
const cameraLookAtPos = new mp.Vector3(622.8427, -1553.021, 195.4714);

let accountBrowser = undefined;
let accountCamera = mp.cameras.new("accountCamera", cameraPos, new mp.Vector3(0.0, 0.0, 63.0), 24);
accountCamera.pointAtCoord(622.8427, -1553.021, 195.4714);

mp.gui.cursor.show(true, true);
mp.nametags.enabled = false;

mp.events.add("guiReady", () => {
    sharedVariables.localPlayer.setCoords(cameraPos.x, cameraPos.y, cameraPos.z - 5.0, false, false, false, false);
    sharedVariables.localPlayer.freezePosition(true);
    accountCamera.setActive(true);
    accountBrowser = mp.browsers.new("package://cef/welcome.html");

    mp.gui.chat.show(false);
    mp.game.ui.displayRadar(false);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    setTimeout(function(){
        mp.gui.cursor.show(false,true)
    },150) 
});

mp.events.add("selectteam:client", (frak) => {
    mp.events.callRemote("selectteam:server", frak);
})

mp.events.add("closefrakbrowser:client", () =>{
    accountBrowser.active = false;
    accountBrowser.destroy();

    accountCamera.setActive(false);
    accountCamera.destroy();

    sharedVariables.localPlayer.freezePosition(false);

    setTimeout(() => {
        mp.game.cam.renderScriptCams(false, false, 0, true, false);
        mp.game.ui.displayRadar(true);
        mp.gui.cursor.visible = false;
        mp.gui.chat.show(true);
        mp.events.callRemote("requestSpawn:server")
    }, 300);
})

mp.events.add("teamchange:client", () => {
    sharedVariables.localPlayer.setCoords(cameraPos.x, cameraPos.y, cameraPos.z - 5.0, false, false, false, false);
    sharedVariables.localPlayer.freezePosition(true);
    sharedVariables.localPlayer.setAlpha(0)
    sharedVariables.localPlayer.setInvincible(true)
    accountCamera.setActive(true);
    accountBrowser = mp.browsers.new("package://cef/welcome.html");

    mp.gui.chat.show(false);
    mp.game.ui.displayRadar(false);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    setTimeout(function(){
        mp.gui.cursor.show(false,true)
    },150) 
});

mp.gui.chat.activate(false);