var markers = 1;
var loaded = false;
mp.events.add("loadmarker:client", (element) => {
    markerhandler(element,"load");
});

mp.events.add("removemarker:client", () => {
    element = null;
    markerhandler(element,"unload");
})

function markerhandler(element, state){
    if(state === "load" && loaded == false){
        loaded = true;
        let marker = "let marker" + element.id + " = mp.markers.new(0,new mp.Vector3("+ element.x + ", " + element.y + ", " + element.z + "),2,{color: [77, 216, 49, 255], visible: true, dimension: " + mp.players.local.dimension + "})"
        eval(marker);
    }
    else if(state === "unload" && loaded == true){
        loaded = false;
        for(let i=1; i <= markers; i++){
            let removemarker = "marker" + i + ".destroy()";
            eval(removemarker);
        };
    };
};