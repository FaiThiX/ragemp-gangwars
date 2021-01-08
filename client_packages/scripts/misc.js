var markers = 1;
mp.events.add("loadmarker:client", (element) => {
    
    let marker = "let marker" + element.id + " = mp.markers.new(0,new mp.Vector3("+ element.x + ", " + element.y + ", " + element.z + "),2,{color: [77, 216, 49, 255], visible: true, dimension: " + mp.players.local.dimension + "})"
    eval(marker);
    markers = markers += 1;
});

mp.events.add("removemarker:client", () => {
    for(let i=1; i <= markers; i++){
        let removemarker = "marker" + i + ".destroy()";
        eval(removemarker);
    }
})