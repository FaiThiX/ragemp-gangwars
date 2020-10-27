mp.events.add('playerSpawn', (player) => {
    console.log('[Player Join]: ' + player.name + ' joined the server.')
    player.giveWeapon([2460120199,911657153,171789620,3220176749,2210333304,2937143193,2132975508,1627465347],1000)
    player.dimension = 0
})

mp.events.add("playerJoin", (player) => {
    console.log(`[JOIN] ${player.name} joined. (ID: ${player.id} - SC: ${player.socialClub} - ${player.ip})`);
});