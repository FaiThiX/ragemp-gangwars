mp.events.add("loadmarker:client", (element) => {
    mp.markers.new(0,new mp.Vector3(element.x, element.y, element.z),1,{
        color: color,
        visible: visible,
        dimension: element.ffa + 1000
    })
});