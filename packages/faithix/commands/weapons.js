mp.events.addCommand("stungun",(player)=>{
    player.giveWeapon(mp.joaat("weapon_stungun"), 1)
})

mp.events.addCommand("weapon", (player, _, weaponName, ammo = 9999) => {
    weaponName = "weapon_"+weaponName
    if (weaponName === null || weaponName === undefined){
        player.outputChatBox("!{#FF8555}SYNTAX: !{#FFFFFF}/weapon [weaponname] [ammoamount]");
    } 
    else{
        player.giveWeapon(mp.joaat(weaponName), Number(ammo));
        player.outputChatBox(`Gave ${weaponName} with ${ammo} ammo.`);
        console.log(`[WEAPON] ${player.name}(${player.id}) gave himself ${weaponName} with ${ammo} ammo`)
    }
});

mp.events.addCommand("dropguns",(player) =>{
    player.removeAllWeapons()
})

mp.events.addCommand("pos",(player) => {
    player.outputChatBox(`${player.position}`);
    console.log(player.position.x + ", " +  player.position.y + ", " + player.position.z);
    return;
});