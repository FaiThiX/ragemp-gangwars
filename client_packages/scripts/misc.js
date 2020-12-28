mp.events.add("loadmarker:client", (element) => {
    mp.markers.new(0,new mp.Vector3(element.x, element.y, element.z),2,{
        color: [77, 216, 49, 255],
        visible: true,
        dimension: mp.players.local.dimension
    })
});