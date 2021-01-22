mp.events.addCommand("weapon", (player, _, weaponName, ammo = 9999) => {
        if(player.isffa === 0 && player.admin > 8){
        weaponName = "weapon_"+weaponName
        if (weaponName === null || weaponName === undefined){
            player.outputChatBox("!{#FF8555}SYNTAX: !{#FFFFFF}/weapon [weaponname] [ammoamount]");
        } 
        else{
            player.giveWeapon(mp.joaat(weaponName), Number(ammo));
            player.outputChatBox(`Gave ${weaponName} with ${ammo} ammo.`);
            console.log(`[WEAPON] ${player.name}(${player.id}) gave himself ${weaponName} with ${ammo} ammo`)
        }
    }
});

mp.events.addCommand("dropguns",(player) =>{
    player.removeAllWeapons()
});

mp.events.addCommand("switchweapon", (player) => {
    player.call("weaponAuswahl");
})