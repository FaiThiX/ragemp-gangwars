const teams = require("../team_config");

mp.events.add("selectteam:server", (player, frak) => {
    player.currentTeam = frak;
    player.call("closefrakbrowser:client")
})

mp.events.add("requestSpawn:server",(player)=>{
    team = player.currentTeam
    player.spawn(teams[team].Spawnpos)    
    for(const val of teams[team].Clothes){
        player.setClothes(Number(val.id), Number(val.drawable), Number(val.texture),2)
    }
    for(const val of teams[team].Props){
        player.setProp(Number(val.id), Number(val.drawable), Number(val.texture))
    }
    player.armour = 100;
    player.health = 100;
    player.isffa = 0;
 })

mp.events.add("heal", (player) => {
    const dist = "amb@code_human_cower@male@idle_a";
    const name = "idle_b";
    const speed = 1;
    const flag = 1;
    if (player.vehicle) return player.notify('~r~Im Auto Rüstung ziehen?!')
    if (player.healused >= 10) return player.notify('~r~Keine Medikits mehr verfügbar')
    player.playAnimation(dist, name, speed, flag);
    player.setVariable("animData", `${dist}%${name}%${flag}`);
    player.playAnimation("rcmcollect_paperleadinout@","kneeling_arrest_get_up", 1, 33);
    setTimeout(() => {
        player.playAnimation("rcmcollect_paperleadinout@","kneeling_arrest_get_up", 1, 33);
        player.setVariable("animData", null);
        player.notify("Heal " + player.healused + " x benutzt")
        player.health = 100;
    }, 4000);
    player.healused = player.healused += 1
});

mp.events.add("armor", (player) => {
    const dist = "anim@heists@narcotics@funding@gang_idle";
    const name = "gang_chatting_idle01";
    const speed = 1;
    const flag = 1;
    if (player.vehicle) return player.notify('~r~Im Auto Rüstung ziehen?!')
    if (player.armourused >= 6) return player.notify('~r~Keine Rüstung mehr verfügbar')
    player.playAnimation(dist, name, speed, flag);
    player.setVariable("animData", `${dist}%${name}%${flag}`);
    player.playAnimation("rcmcollect_paperleadinout@","kneeling_arrest_get_up", 1, 33);
    setTimeout(() => {
        player.playAnimation("rcmcollect_paperleadinout@","kneeling_arrest_get_up", 1, 33);
        player.setVariable("animData", null);
        player.notify("Rüstung " + player.armourused + " x benutzt")
        player.armour = 100;
    }, 4000);
    player.armourused = player.armourused += 1
});