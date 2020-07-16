mp.events.add('playerSpawn', (player) => {
    console.log('[Player Join]: ' + player.name + ' joined the server.')
    player.outputChatBox("!!!Der Server ist kein Ganwarserver mehr!!!")
    player.outputChatBox("Mit /help kannst du dir alle Befehle anzeigen lassen!")
    player.armour = 100;
    player.health = 100;
    player.position = new mp.Vector3(-412, 1170, 325.842529296875)
    player.giveWeapon([2460120199,911657153,171789620,3220176749,2210333304,2937143193,2132975508,1627465347],1000)
})

mp.events.add("playerJoin", (player) => {
    console.log(`[JOIN] ${player.name} joined. (ID: ${player.id} - SC: ${player.socialClub} - ${player.ip})`);
    player.dimension = 1
});