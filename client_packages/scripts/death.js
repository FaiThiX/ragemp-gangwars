const joaat = mp.game.joaat;

const msgGroups = {
    "melee": [
        joaat("weapon_unarmed"), joaat("weapon_bat"), joaat("weapon_nightstick"), joaat("weapon_hammer"), joaat("weapon_crowbar"),
        joaat("weapon_golfclub"), joaat("weapon_knuckle"), joaat("weapon_hatchet"), joaat("weapon_poolcue"), joaat("weapon_wrench"),
        joaat("weapon_flashlight"), joaat("weapon_bottle"), joaat("weapon_battleaxe"), joaat("weapon_machete")
    ],

    "molotov": [ joaat("weapon_molotov") ],
    "knife": [ joaat("weapon_knife"), joaat("weapon_dagger"), joaat("weapon_switchblade") ],

    "pistol": [
        joaat("weapon_pistol"), joaat("weapon_combatpistol"), joaat("weapon_appistol"), joaat("weapon_snspistol"), joaat("weapon_snspistol_mk2"),
        joaat("weapon_heavypistol"), joaat("weapon_vintagepistol"), joaat("weapon_marksmanpistol"), joaat("weapon_machinepistol"), joaat("weapon_revolver"),
        joaat("weapon_revolver_mk2"), joaat("weapon_pistol50"), joaat("weapon_pistol_mk2"), joaat("weapon_doubleaction")
    ],

    "smg": [
        joaat("weapon_smg"), joaat("weapon_microsmg"), joaat("weapon_combatpdw"), joaat("weapon_minismg"), joaat("weapon_assaultsmg"),
        joaat("weapon_gusenberg"), joaat("weapon_smg_mk2")
    ],

    "rifle": [
        joaat("weapon_assaultrifle"), joaat("weapon_carbinerifle"), joaat("weapon_carbinerifle_mk2"), joaat("weapon_advancedrifle"), joaat("weapon_assaultrifle_mk2"),
        joaat("weapon_specialcarbine"), joaat("weapon_specialcarbine_mk2"), joaat("weapon_bullpuprifle"), joaat("weapon_bullpuprifle_mk2"), joaat("weapon_musket"),
        joaat("weapon_compactrifle")
    ],

    "mg": [
        joaat("weapon_mg"), joaat("weapon_combatmg"), joaat("weapon_combatmg_mk2"), joaat("vehicle_weapon_player_bullet"), joaat("vehicle_weapon_ruiner_bullet"),
        joaat("vehicle_weapon_cannon_blazer"), joaat("vehicle_weapon_oppressor_mg"), joaat("vehicle_weapon_ardent_mg"), joaat("vehicle_weapon_nightshark_mg"), joaat("vehicle_weapon_microlight_mg"),
        joaat("vehicle_weapon_tula_nosemg"), joaat("vehicle_weapon_tula_mg"), joaat("vehicle_weapon_tula_dualmg"), joaat("vehicle_weapon_deluxo_mg"), joaat("vehicle_weapon_subcar_mg"),
        joaat("vehicle_weapon_comet_mg"), joaat("vehicle_weapon_revolter_mg"), joaat("vehicle_weapon_savestra_mg"), joaat("vehicle_weapon_viseris_mg"), joaat("vehicle_weapon_caracara_mg"),
        joaat("vehicle_weapon_bombushka_dualmg"), joaat("vehicle_weapon_dogfighter_mg"), joaat("vehicle_weapon_mogul_nose"), joaat("vehicle_weapon_mogul_dualnose"), joaat("vehicle_weapon_mogul_turret"),
        joaat("vehicle_weapon_mogul_dualturret"), joaat("vehicle_weapon_rogue_mg"), joaat("vehicle_weapon_seabreeze_mg"), joaat("vehicle_weapon_vigilante_mg"), joaat("vehicle_weapon_dune_mg")
    ],

    "shotgun": [
        joaat("weapon_pumpshotgun"), joaat("weapon_pumpshotgun_mk2"), joaat("weapon_sawnoffshotgun"), joaat("weapon_assaultshotgun"), joaat("weapon_bullpupshotgun"),
        joaat("weapon_heavyshotgun"), joaat("weapon_dbshotgun"), joaat("weapon_autoshotgun")
    ],

    "sniper": [
        joaat("weapon_heavysniper"), joaat("weapon_remotesniper"), joaat("weapon_sniperrifle"), joaat("weapon_marksmanrifle"), joaat("weapon_marksmanrifle_mk2"),
        joaat("weapon_heavysniper_mk2")
    ],

    "heavy": [
        joaat("weapon_explosion"), joaat("weapon_grenadelauncher"), joaat("weapon_flaregun"), joaat("weapon_rpg"), joaat("weapon_vehicle_rocket"),
        joaat("weapon_railgun"), joaat("weapon_firework"), joaat("weapon_hominglauncher"), joaat("weapon_compactlauncher"), joaat("weapon_airstrike_rocket"),
        joaat("vehicle_weapon_turret_technical"), joaat("vehicle_weapon_space_rocket"), joaat("vehicle_weapon_player_laser"), joaat("vehicle_weapon_player_buzzard"), joaat("weapon_passenger_rocket"),
        joaat("vehicle_weapon_plane_rocket"), joaat("vehicle_weapon_player_savage"), joaat("vehicle_weapon_tank"), joaat("vehicle_weapon_ruiner_rocket"), joaat("vehicle_weapon_turret_boxville"),
        joaat("vehicle_weapon_turret_insurgent"), joaat("vehicle_weapon_player_lazer"), joaat("vehicle_weapon_oppressor_missile"), joaat("vehicle_weapon_tampa_missile"), joaat("vehicle_weapon_tampa_mortar"),
        joaat("vehicle_weapon_akula_turret_single"), joaat("vehicle_weapon_akula_turret_dual"), joaat("vehicle_weapon_akula_missile"), joaat("vehicle_weapon_akula_barrage"), joaat("vehicle_weapon_avenger_cannon"),
        joaat("vehicle_weapon_barrage_top_mg"), joaat("vehicle_weapon_barrage_rear_mg"), joaat("vehicle_weapon_barrage_rear_gl"), joaat("vehicle_weapon_cherno_missile"), joaat("vehicle_weapon_deluxo_missile"),
        joaat("vehicle_weapon_khanjali_cannon"), joaat("vehicle_weapon_khanjali_cannon_heavy"), joaat("vehicle_weapon_khanjali_mg"), joaat("vehicle_weapon_khanjali_gl"), joaat("vehicle_weapon_subcar_missile"),
        joaat("vehicle_weapon_subcar_torpedo"), joaat("vehicle_weapon_thruster_missile"), joaat("vehicle_weapon_bomb_standard_wide"), joaat("vehicle_weapon_volatol_dualmg"), joaat("vehicle_weapon_bombushka_cannon"),
        joaat("vehicle_weapon_dogfighter_missile"), joaat("vehicle_weapon_hunter_mg"), joaat("vehicle_weapon_hunter_missile"), joaat("vehicle_weapon_hunter_barrage"), joaat("vehicle_weapon_hunter_cannon"),
        joaat("vehicle_weapon_rogue_cannon"), joaat("vehicle_weapon_rogue_missile"), joaat("vehicle_weapon_vigilante_missile"), joaat("vehicle_weapon_nose_turret_valkyrie"), joaat("vehicle_weapon_dune_grenadelauncher"),
        joaat("vehicle_weapon_halftrack_dualmg"), joaat("vehicle_weapon_halftrack_quadmg"), joaat("vehicle_weapon_apc_cannon"), joaat("vehicle_weapon_apc_missile"), joaat("vehicle_weapon_apc_mg")
    ],

    "minigun": [
        joaat("weapon_minigun"), joaat("vehicle_weapon_turret_limo"), joaat("vehicle_weapon_tampa_fixedminigun"), joaat("vehicle_weapon_tampa_dualminigun"), joaat("vehicle_weapon_insurgent_minigun"),
        joaat("vehicle_weapon_technical_minigun"), joaat("vehicle_weapon_havok_minigun"), joaat("vehicle_weapon_tula_minigun"), joaat("vehicle_weapon_akula_minigun"), joaat("vehicle_weapon_barrage_top_minigun"),
        joaat("vehicle_weapon_barrage_rear_minigun"), joaat("vehicle_weapon_thruster_mg"), joaat("vehicle_weapon_caracara_minigun"), joaat("vehicle_weapon_turret_valkyrie"), joaat("vehicle_weapon_dune_minigun")
    ],

    "explosive": [ joaat("weapon_stickybomb"), joaat("weapon_grenade"), joaat("weapon_proxmine"), joaat("weapon_pipebomb") ],
    "rotor": [ joaat("vehicle_weapon_rotors") ],
    "flatten": [ joaat("weapon_rammed_by_car"), joaat("weapon_run_over_by_car") ]
};

const deathMessages = {
    "melee": ["melee killed you.", "beat you down.", "battered you.", "whacked you.", "murdered you."],
    "molotov": ["torched you.", "flambeed you.", "barbecued you."],
    "knife": ["knifed you.", "stabbed you.", "eviscerated you."],
    "pistol": ["pistoled you.", "popped you.", "blasted you.", "bust a cap in you.", "plugged you."],
    "smg": ["submachine gunned you.", "riddled you.", "drilled you.", "finished you."],
    "rifle": ["rifled you.", "shot you down.", "ended you.", "floored you."],
    "mg": ["machine gunned you.", "sprayed you.", "ruined you."],
    "shotgun": ["shotgunned you.", "pulverized you.", "devastated you."],
    "sniper": ["sniped you.", "scoped you.", "picked you off."],
    "heavy": ["destroyed you.", "erased you.", "annihilated you."],
    "minigun": ["ripped you apart.", "shredded you.", "wiped you out.", "owned you."],
    "explosive": ["blew you up.", "bombed you.", "exploded you."],
    "rotor": ["mowed you down."],
    "flatten": ["flattened you."]
};

let scaleformHandle = -1;
let scaleformRenderBegin = 0;
let scaleformRenderTime = 5000;
let scaleformAnimatedOut = false;

let textTimer = null;

function getMessageGroup(hash) {
    for (let group in msgGroups) {
        if (msgGroups[group].includes(hash)) {
            return group;
        }
    }

    return "noidea";
}

function getDeathMessage(name, reasonHash, color) {
    let msgGroup = getMessageGroup(reasonHash);
    return `~${color}~<C>${name}</C> ~w~${(deathMessages[msgGroup]) ? deathMessages[msgGroup][ Math.floor(Math.random() * deathMessages[msgGroup].length) ] : "killed you."}`;
}

function showBigMessage(title, message, time = 5000) {
    if (scaleformHandle === -1) {
        scaleformHandle = mp.game.graphics.requestScaleformMovie("mp_big_message_freemode");
        while (!mp.game.graphics.hasScaleformMovieLoaded(scaleformHandle)) mp.game.wait(0);
    }

    mp.game.graphics.pushScaleformMovieFunction(scaleformHandle, "SHOW_SHARD_CENTERED_MP_MESSAGE");
    mp.game.graphics.pushScaleformMovieFunctionParameterString(title);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(message);
    mp.game.graphics.popScaleformMovieFunctionVoid();

    scaleformRenderBegin = Date.now();
    scaleformRenderTime = time;
    scaleformAnimatedOut = false;
}

mp.events.add("playerDeath", (player, reason, killer) => {
    sharedVariables.drawUI = false;

    mp.game.audio.playSoundFrontend(-1, "Bed", "WastedSounds", true);
    mp.game.graphics.startScreenEffect("DeathFailMPIn", 0, true);
    mp.game.cam.setCamEffect(1);

    if (textTimer) clearTimeout(textTimer);
    textTimer = setTimeout(function() {
        showBigMessage("~r~Wasted", (killer ? `${killer.handle === player.handle ? `You committed suicide.` : getDeathMessage(killer.name, reason, killer.getVariable("nametagColor"))}` : "You died."));
    }, 750);
});

mp.events.add("playerSpawn", () => {
    sharedVariables.drawUI = true;

    mp.game.player.setHealthRechargeMultiplier(0.0);
    mp.game.graphics.stopScreenEffect("DeathFailMPIn");
    mp.game.cam.setCamEffect(0);

    if (textTimer) {
        clearTimeout(textTimer);
        textTimer = null;
    }
});

mp.events.add("render", () => {
    if (scaleformHandle !== -1) {
        mp.game.graphics.drawScaleformMovieFullscreen(scaleformHandle, 255, 255, 255, 255, false);

        if (scaleformRenderBegin > 0 && Date.now() - scaleformRenderBegin > scaleformRenderTime) {
            if (scaleformAnimatedOut) {
                scaleformRenderBegin = 0;

                mp.game.graphics.setScaleformMovieAsNoLongerNeeded(scaleformHandle);
                scaleformHandle = -1;
            } else {
                mp.game.graphics.pushScaleformMovieFunction(scaleformHandle, "TRANSITION_OUT");
                mp.game.graphics.popScaleformMovieFunctionVoid();

                scaleformAnimatedOut = true;
                scaleformRenderTime += 750;
            }
        }
    }
});