mp.events.addCommand("clo",(player, _, componentId, drawable, texture) => {
    player.setClothes(Number(componentId),Number(drawable),Number(texture),2);
    player.outputChatBox("Du hast folgende *Clothes* angelegt:")
    player.outputChatBox("ComponentID: " + componentId)
    player.outputChatBox("Drawable: " + drawable)
    player.outputChatBox("Texture: " + texture)
    player.outputChatBox("All: " + componentId + " " + drawable + " " + texture)
})

mp.events.addCommand("prop",(player, _, componentId, drawable, texture) => {
    player.setProp(Number(componentId),Number(drawable),Number(texture));
    player.outputChatBox("Du hast folgende *Prop* angelegt:")
    player.outputChatBox("PropID: " + componentId)
    player.outputChatBox("Drawable: " + drawable)
    player.outputChatBox("Texture: " + texture)
    player.outputChatBox("All: " + componentId + " " + drawable + " " + texture)
})

mp.events.addCommand("export", (player) =>{
    let clothes = [];
    for(i=1; i<=11; i++){
        let clothesobject = {}
        let currentclothes = player.getClothes(i);
        clothesobject.id = i;
        clothesobject.drawable = currentclothes.drawable;
        clothesobject.textture = currentclothes.texture;
        clothes[i] = clothesobject;
    }
    clothes.filter(val => val);
    console.log(JSON.stringify(clothes));
});