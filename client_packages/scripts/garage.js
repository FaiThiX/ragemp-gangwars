let browser = null;
let browserToggle = false;

mp.keys.bind(0x45, true, () => {
    mp.events.callRemote("opengarage:server")
});


mp.events.add("opengarage:client", (player) => {
    if(browserToggle == false){
        browser = mp.browsers.new("package://ui/html/Garage.html");
        mp.gui.chat.activate(false);
        mp.gui.cursor.show(true, true);
        browserToggle = true;
    }else if (browserToggle == true){
        mp.gui.cursor.show(false, false);
        browser.destroy();
        browserToggle = false;  
        mp.gui.chat.activate(true);
    }
});

mp.events.add("closeGarage", (player) => {
    browser.destroy();
    browserToggle = false;
    mp.gui.cursor.show(false, false);
    mp.gui.chat.activate(true);
});

mp.events.add("selectCar", (args) => {
    mp.events.callRemote("spawncar:server", (args))
    mp.gui.cursor.show(false, false);
    browserToggle = false;
    browser.destroy();
    mp.gui.chat.activate(true);
});