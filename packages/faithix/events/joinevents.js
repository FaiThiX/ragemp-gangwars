mp.events.add('playerSpawn', (player) => {
    player.giveWeapon([2937143193,1649403952,1627465347,3523564046],1000)
})

mp.events.add("playerJoin", (player) => {
    console.log(`[JOIN] ${player.name} joined. (ID: ${player.id} - SC: ${player.socialClub} - ${player.ip})`);
    player.dimension = 0
    player.isffa = 0
});