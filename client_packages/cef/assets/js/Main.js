
let frakBrowser = null;

mp.events.add("CloseFrakBrowser", () => {

	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("mnc", () => {
    mp.events.callRemote('mnc.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});


mp.events.add("gf", () => {
    mp.events.callRemote('gf.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("ballas", () => {
    mp.events.callRemote('ballas.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("lsv", () => {
    mp.events.callRemote('lsv.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("mg13", () => {
    mp.events.callRemote('mg13.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("lcn", () => {
    mp.events.callRemote('lcn.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("triaden", () => {
    mp.events.callRemote('triaden.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("yakuza", () => {
    mp.events.callRemote('yakuza.server');
	frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});

mp.events.add("destroyfrakbrowser", () => {
    frakBrowser.destroy();
    mp.gui.cursor.show(false, false);
});
