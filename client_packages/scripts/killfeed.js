const ui = mp.game.ui;

const maxKillFeedItems = 5;
const killFeedItemRemoveTime = 30000;
const feedVisualUpdateInterval = 1000;


const drawX = 0.9975;
const drawY = 0.063;
const itemMargin = 0.02;
const itemHeight = 0.03;
const itemPadding = 0.005;


const fontStyle = 4;
const fontScale = 0.35;


let lastSafeZone = mp.game.graphics.getSafeZoneSize();
let lastResolution = mp.game.graphics.getScreenActiveResolution(0, 0);
let finalDrawX = drawX - (1.0 - lastSafeZone) * 0.5;
let finalDrawY = drawY + (1.0 - lastSafeZone) * 0.5;
let killFeedItems = [];


const getTextWidth = (text, font, scale) => {
    ui.setTextEntryForWidth("STRING");
    ui.addTextComponentSubstringPlayerName(text);
    ui.setTextFont(font);
    ui.setTextScale(scale * 1.25, scale);
    return ui.getTextScreenWidth(true);
};

const drawText = (text, drawXY, font, color, scale, alignRight = false) => {
    ui.setTextEntry("STRING");
    ui.addTextComponentSubstringPlayerName(text);
    ui.setTextFont(font);
    ui.setTextScale(scale, scale);
    ui.setTextColour(color[0], color[1], color[2], color[3]);
    mp.game.invoke("0x2513DFB0FB8400FE"); 

    if (alignRight) {
        ui.setTextRightJustify(true);
        ui.setTextWrap(0, drawXY[0]);
    }

    ui.drawText(drawXY[0], drawXY[1]);
};

setInterval(() => {
    let safeZone = mp.game.graphics.getSafeZoneSize();
    if (safeZone != lastSafeZone) {
        finalDrawX = drawX - (1.0 - safeZone) * 0.5;
        finalDrawY = drawY + (1.0 - safeZone) * 0.5;
        lastSafeZone = safeZone;
    }

    let resolution = mp.game.graphics.getScreenActiveResolution(0, 0);
    if (resolution.x != lastResolution.x || resolution.y != lastResolution.y) {
        for (let i = 0, max = killFeedItems.length; i < max; i++) {
            killFeedItems[i].TextWidth = getTextWidth(killFeedItems[i].Text, fontStyle, fontScale);
        }

        lastResolution = resolution;
    }

    let now = Date.now();
    for (let i = killFeedItems.length - 1; i >= 0; i--) {
        if (now - killFeedItems[i].PushTime >= killFeedItemRemoveTime) killFeedItems.splice(i, 1);
    }
}, feedVisualUpdateInterval);

mp.events.add("pushToKillFeed", (message) => {
    if (killFeedItems.length >= maxKillFeedItems) killFeedItems.shift();

    killFeedItems.push({
        Text: message,
        TextWidth: getTextWidth(message, fontStyle, fontScale),
        PushTime: Date.now()
    });
});

mp.events.add("render", () => {
    for (let i = 0, max = killFeedItems.length; i < max; i++) {
        drawText(killFeedItems[i].Text, [finalDrawX, finalDrawY + (itemMargin * i) - (itemHeight / 2)], fontStyle, [255, 255, 255, 255], fontScale, true);
    }
});