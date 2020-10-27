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