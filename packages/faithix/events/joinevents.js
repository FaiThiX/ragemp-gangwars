mp.events.add('playerSpawn', (player) => {
    player.giveWeapon([2937143193,],1000)
    player.dimension = 0
})

mp.events.add("playerJoin", (player) => {
    console.log(`[JOIN] ${player.name} joined. (ID: ${player.id} - SC: ${player.socialClub} - ${player.ip})`);
});